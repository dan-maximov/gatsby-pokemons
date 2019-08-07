import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaSkull } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5em 0;
`;

const Type = styled.p`
  font-size: 0.8em;
  color: #9e9e9e;
`;

const DamageWrapper = styled.div`
  display: flex;
`;

const Damage = styled.p`
  margin-right: 6px;
  color: #d50000;
  font-weight: bold;
`;

const Attack = ({ attack }) => (
  <Wrapper>
    <div>
      <p>{attack.name}</p>
      <Type>{attack.type}</Type>
    </div>
    <DamageWrapper>
      <Damage>{attack.damage}</Damage>
      <FaSkull color="#d50000" />
    </DamageWrapper>
  </Wrapper>
);

export const attack = PropTypes.shape({
  name: PropTypes.string,
  type: PropTypes.string,
  damage: PropTypes.number,
});

Attack.propTypes = {
  attack: attack.isRequired,
};

export default Attack;
