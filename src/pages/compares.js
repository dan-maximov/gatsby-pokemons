import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';

const Compares = ({ compare }) => (
  <div>
    {compare.map(a => (
      <p>{a}</p>
    ))}
  </div>
);

Compares.propTypes = {
  compare: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const enhance = connect('compare');

export default enhance(Compares);
