import React from 'react';
import styled from 'styled-components';
import { FaSkull } from 'react-icons/fa';
import { IAttack } from 'types/Pokemon';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

const Type = styled.p`
  font-size: 13px;
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

interface IProps {
  attack: IAttack;
}

const Attack = ({ attack }: IProps) => (
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

export default Attack;
