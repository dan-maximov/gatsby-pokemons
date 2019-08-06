/* eslint-disable react/prop-types */
const React = require('react');
const { Normalize } = require('styled-normalize');

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => (
  <React.Fragment>
    <Normalize />
    {element}
  </React.Fragment>
);
