/* global document IntersectionObserver */
import React, { useRef, useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';

const unloadedStyle = css`
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
`;

const loadedStyle = css`
  opacity: 1;
`;

interface IImageProps {
  loaded: boolean;
}

const Image = styled.img`
  transition: 0.3s opacity linear;
  ${({ loaded }: IImageProps) => (loaded ? loadedStyle : unloadedStyle)}
`;

interface IProps {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt, ...props }: IProps) => {
  const [loaded, handleLoaded] = useReducer(a => !a, false);
  const image = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const setSrc = () => {
    if (image.current) {
      image.current.src = src;
    }
  };

  useEffect(() => {
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

  return <Image loaded={loaded} onLoad={handleLoaded} ref={image} alt={alt} {...props} />;
};

export default LazyImage;
