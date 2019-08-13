import React from 'react';
import AttackComponent from 'components/Attack';
import { Attack } from 'types/Pokemon';

interface Props {
  title: string;
  attacks: Attack[];
}

const AttackList: React.FC<Props> = ({ title, attacks }) => (
  <>
    <h2>{title}</h2>
    {attacks.map(a => (
      <AttackComponent attack={a} key={a.name} />
    ))}
  </>
);

export default AttackList;
