import { useState, useEffect } from 'react';

export default () => {
  const [client, rerender] = useState(false);
  useEffect(() => rerender(!client), []);
  return client;
};
