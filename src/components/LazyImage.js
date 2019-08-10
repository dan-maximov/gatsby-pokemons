/* global document IntersectionObserver */
import React, { useRef, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const unloadedStyle = css`
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
`;

const loadedStyle = css`
  opacity: 1;
`;

const Image = styled.img`
  transition: 0.3s opacity linear;
  ${({ loaded }) => (loaded ? loadedStyle : unloadedStyle)}
`;

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, handleLoaded] = useReducer(a => !a, false);
  const image = useRef(null);
  const observer = useRef(null);

  const setSrc = () => {
    image.current.src = src;
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

            observer.current = observer.current.disconnect();
          }
        },
        {
          root: document.querySelector('.container'),
        },
      ),
    );
    observer.current.observe(image.current);

    return () => {
      if (observer.current) observer.current = observer.current.disconnect();
    };
  }, []);

  return <Image loaded={loaded} onLoad={handleLoaded} ref={image} alt={alt} {...props} />;
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
