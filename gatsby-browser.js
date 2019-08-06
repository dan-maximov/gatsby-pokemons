/* eslint-disable react/prop-types */
const React = require('react');
const { Normalize } = require('styled-normalize');
const Layout = require('./src/components/Layout').default;

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => (
  <React.Fragment>
    <Normalize />
    {element}
  </React.Fragment>
);
