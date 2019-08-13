import React from 'react';
import { graphql } from 'gatsby';
import { damageDiff } from 'utils/format';
import { IAttacks } from 'types/Pokemon';

interface IProps {
  attacks: IAttacks;
}

const DamageDifference = ({ attacks }: IProps) => <span>{damageDiff(attacks)}</span>;

export const query = graphql`
  fragment AttacksDifference on PokeAPI_Pokemon {
    attacks {
      fast {
        damage
      }
      special {
        damage
      }
    }
  }
`;

export default DamageDifference;
