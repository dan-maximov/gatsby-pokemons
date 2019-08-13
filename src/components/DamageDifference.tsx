import React from 'react';
import { graphql } from 'gatsby';
import { damageDiff } from 'utils/format';
import { Attacks } from 'types/Pokemon';

interface Props {
  attacks: Attacks;
}

const DamageDifference: React.FC<Props> = ({ attacks }) => <span>{damageDiff(attacks)}</span>;

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
