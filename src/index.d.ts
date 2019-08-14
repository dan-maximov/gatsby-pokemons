import { CSSProp } from 'styled-components/cssprop';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}

declare global {
  interface Window {
    __listScrolled__: number;
    __imagesSeen__: string[];
  }
}
