import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Attack, { attack } from './Attack';

const Title = styled.h2`
  margin: 0;
`;

const AttackList = ({ title, attacks }) => (
  <>
    <Title>{title}</Title>
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
