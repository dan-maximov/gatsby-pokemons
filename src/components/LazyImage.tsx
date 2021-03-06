import React, { useRef, useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';

enum ImageState {
  loading,
  loaded,
  ready,
}

const instaShowStyle = css`
  transition: 0s;
  opacity: 0;
  &[src] {
    opacity: 1 !important;
  }
`;

const unloadedStyle = css`
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
`;

const loadedStyle = css`
  transition: 0.3s opacity linear;
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
  if (typeof window !== 'undefined' && Array.isArray(window.__imagesSeen__) && window.__imagesSeen__.includes(src)) {
    return ImageState.ready;
  }

  return ImageState.loading;
};

const LazyImage: React.FC<Props> = ({ src, alt, ...props }) => {
  const [loaded, handleLoaded] = useReducer(reducerFunction(src), getStatus(src));

  const image = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const setSrc = () => {
    if (image.current) {
      image.current.src = src;
    }
  };

  useEffect(() => {
    if (loaded === ImageState.ready) {
      setSrc();
      return () => undefined;
    }

    observer.current = new IntersectionObserver(entries =>
      entries.forEach(
        ({ isIntersecting }) => {
          if (isIntersecting) {
            setSrc();

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

  const onLoad = loaded === ImageState.ready ? undefined : handleLoaded;

  return <Image loadedState={loaded} onLoad={onLoad} ref={image} alt={alt} {...props} />;
};

export default LazyImage;
