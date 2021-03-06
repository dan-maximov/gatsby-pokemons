/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCookie, setCookie } from 'tiny-cookie';

export const getJSON =
  typeof window === 'undefined' ? (_: string) => undefined : (key: string) => getCookie(key, JSON.parse);
export const setJSON =
  typeof window === 'undefined'
    ? (_: string) => undefined
    : <T>(key: string, value: T) => setCookie(key, value, JSON.stringify);
