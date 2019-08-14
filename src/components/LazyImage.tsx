import React, { useRef, useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';

enum ImageState {
  ready,
  loading,
  loaded,
}

const instaShowStyle = css`
  opacity: 1;
  transition: unset;
`;

const unloadedStyle = css`
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
`;

const loadedStyle = css`
  opacity: 1;
`;

interface ImageProps {
  loadedState: ImageState;
}

const getImageStyle = ({ loadedState }: ImageProps) => {
  switch (loadedState) {
    case ImageState.loading:
      return unloadedStyle;
    case ImageState.loaded:
      return loadedStyle;
    case ImageState.ready:
      return instaShowStyle;
  }
};

const Image = styled.img<ImageProps>`
  transition: 0.3s opacity linear;
  ${getImageStyle}
`;

interface Props {
  src: string;
  alt: string;
}

const reducerFunction = (src: string) => () => {
  if (Array.isArray(window.__imagesSeen__)) {
    if (!window.__imagesSeen__.includes(src)) {
      window.__imagesSeen__.push(src);
    }
  } else {
    window.__imagesSeen__ = [src];
  }

  return ImageState.loaded;
};

const getStatus = (src: string) => {
  if (Array.isArray(window.__imagesSeen__) && window.__imagesSeen__.includes(src)) {
    return ImageState.ready;
  }

  return ImageState.loading;
};

const LazyImage: React.FC<Props> = ({ src, alt, ...props }) => {
  const [loaded, handleLoaded] = useReducer(reducerFunction(src), getStatus(src));

  const image = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const setSrc = () => {
    if (image.current && !image.current.src) {
      image.current.src = src;
    }
  };

  useEffect(() => {
    if (loaded === ImageState.ready) {
      return () => undefined;
    }

    observer.current = new IntersectionObserver(entries =>
      entries.forEach(
        ({ isIntersecting }) => {
          if (isIntersecting) {
            if (document.readyState === 'complete') {
              setSrc();
            } else {
              document.addEventListener('load', setSrc);
            }

            if (observer.current) {
              observer.current.disconnect();
            }
            observer.current = null;
          }
        },
        {
          root: document.querySelector('.container'),
        },
      ),
    );
    if (image.current) {
      observer.current.observe(image.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <Image
      loadedState={loaded}
      onLoad={handleLoaded}
      ref={image}
      alt={alt}
      src={getStatus(src) === ImageState.ready ? src : undefined}
      {...props}
    />
  );
};

export default LazyImage;
