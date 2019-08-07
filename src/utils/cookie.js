import { getCookie, setCookie } from 'tiny-cookie';

export const getJSON = typeof window === 'undefined' ? () => {} : key => getCookie(key, JSON.parse);
export const setJSON =
  typeof window === 'undefined' ? () => {} : (key, value, options) => setCookie(key, value, JSON.stringify, options);
