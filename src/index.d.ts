import { CSSProp } from 'styled-components/cssprop';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
