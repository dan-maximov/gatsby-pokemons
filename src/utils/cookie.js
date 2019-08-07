import { getCookie, setCookie } from 'tiny-cookie';

export const getJSON = key => getCookie(key, JSON.parse);
export const setJSON = (key, value, options) => setCookie(key, value, JSON.stringify, options);
