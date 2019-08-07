/* eslint-disable react/prop-types */
const React = require('react');
const { Normalize } = require('styled-normalize');
const { Provider } = require('unistore/react');
const Layout = require('./src/components/Layout').default;
const { createStore } = require('./src/store');

exports.wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => (
  <React.Fragment>
    <Normalize />
    <Provider store={createStore()}>{element}</Provider>
  </React.Fragment>
);
