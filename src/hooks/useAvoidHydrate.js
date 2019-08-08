import { useReducer, useEffect } from 'react';

export default () => {
  const [client, rerender] = useReducer(a => !a, false);
  useEffect(rerender, []);
  return client;
};
