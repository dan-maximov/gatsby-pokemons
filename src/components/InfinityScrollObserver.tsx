/* global document IntersectionObserver */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

interface IProps {
  max: number;
  current: number;
  increaseQuantity: number;
  increaseFunc(n: number): void;
}

const InfinityScrollObserver = ({ max, current, increaseQuantity, increaseFunc }: IProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (current === max) {
      return;
    }

    observer.current = new IntersectionObserver(
      entries =>
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            if (current + increaseQuantity >= max && observer.current) {
              increaseFunc(max);
              observer.current.disconnect();
              observer.current = null;
              return;
            }
            increaseFunc(current + increaseQuantity);
          }
        }),
      {
        root: document.getElementById('root'),
      },
    );

    if (el.current) {
      observer.current.observe(el.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [max, current]);

  return <div style={{ position: 'absolute', bottom: 200 }} ref={el} />;
};

InfinityScrollObserver.propTypes = {
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.number.isRequired,
  increaseFunc: PropTypes.func.isRequired,
};

export default InfinityScrollObserver;
