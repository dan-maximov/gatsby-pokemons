import React from 'react';
import PropTypes from 'prop-types';
import Attack, { attack } from './Attack';

const AttackList = ({ title, attacks }) => (
  <>
    <h2>{title}</h2>
    {attacks.map(a => (
      <Attack attack={a} key={a.name} />
    ))}
  </>
);

AttackList.propTypes = {
  title: PropTypes.string.isRequired,
  attacks: PropTypes.arrayOf(attack).isRequired,
};

export default AttackList;
