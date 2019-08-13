import React from 'react';
import Attack from 'components/Attack';
import { IAttack } from 'types/Pokemon';

interface IProps {
  title: string;
  attacks: IAttack[];
}

const AttackList = ({ title, attacks }: IProps) => (
  <>
    <h2>{title}</h2>
    {attacks.map(a => (
      <Attack attack={a} key={a.name} />
    ))}
  </>
);

export default AttackList;
