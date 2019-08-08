/* global document IntersectionObserver */
import React, { useRef, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: 0.3s opacity linear;
`;

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, handleLoaded] = useReducer(a => !a, false);
  const image = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries =>
      entries.forEach(
        ({ isIntersecting }) => {
          if (isIntersecting) {
            image.current.src = src;
            observer.current = observer.current.disconnect();
          }
        },
        {
          root: document.querySelector('.container'),
        },
      ),
    );
    observer.current.observe(image.current);
  }, []);

  return <Image loaded={loaded} onLoad={handleLoaded} ref={image} alt={alt} {...props} />;
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
