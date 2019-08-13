import React from 'react';
import { Normalize } from 'styled-normalize';
import { Provider } from 'unistore/react';
import { createGlobalStyle } from 'styled-components';
import Layout from 'components/Layout';
import { createStore } from 'store';

const GlobalStyle = createGlobalStyle`
  h1,h2,p {
    margin: 0;
  }
  
  table,
  tr,
  td,
  tbody,
  thead {
    margin:0;
    padding:0;
    background:none;
    border:none;
    border-collapse:collapse;
    border-spacing:0;
    background-image:none;
  }
`;

interface Props {
  element: React.ReactNode;
}

export const wrapPageElement: React.FC<Props> = ({ element }) => <Layout>{element}</Layout>;
export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <Provider store={createStore()}>{element}</Provider>
  </>
);
