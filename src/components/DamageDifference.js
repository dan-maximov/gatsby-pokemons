import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { damageDiff } from '../utils/format';

const DamageDifference = ({ attacks }) => (
  <React.Fragment>
    <span role="img" aria-label="fist">
      👊
    </span>
    {damageDiff(attacks)}
  </React.Fragment>
);

DamageDifference.propTypes = {
  attacks: PropTypes.objectOf({
    fast: PropTypes.objectOf({
      name: PropTypes.string,
      type: PropTypes.string,
      damage: PropTypes.number,
    }),
    special: PropTypes.objectOf({
      name: PropTypes.string,
      type: PropTypes.string,
      damage: PropTypes.number,
    }),
  }).isRequired,
};

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
