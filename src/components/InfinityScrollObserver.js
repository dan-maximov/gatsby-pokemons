/* global document IntersectionObserver */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const InfinityScrollObserver = ({ max, current, increaseQuantity, increaseFunc }) => {
  const observer = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    if (current === max) {
      return () => {};
    }

    observer.current = new IntersectionObserver(
      entries =>
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            console.log('increased');
            console.log('prev', current);
            console.log('new', current + increaseQuantity > max ? max : current + increaseQuantity);
            if (current + increaseQuantity >= max) {
              increaseFunc(max);
              observer.current = observer.current.disconnect();
              return;
            }
            increaseFunc(current + increaseQuantity);
          }
        }),
      {
        root: document.getElementById('root'),
      },
    );

    observer.current.observe(el.current);
    return () => {
      if (observer.current) observer.current = observer.current.disconnect();
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
