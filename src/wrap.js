const React = require('react');
const { Normalize } = require('styled-normalize');
const { Provider } = require('unistore/react');
const { createGlobalStyle } = require('styled-components');
const Layout = require('./components/Layout').default;
const { createStore } = require('./store');

const GlobalStyle = createGlobalStyle`
  h1,h2,p {
    margin: 0;
  }
`;

// eslint-disable-next-line react/prop-types
exports.wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <Provider store={createStore()}>{element}</Provider>
  </>
);
