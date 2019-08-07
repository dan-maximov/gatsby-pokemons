import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { damageDiff } from '../utils/format';

const DamageDifference = ({ attacks }) => damageDiff(attacks);

export const damageDifferencePropTypes = PropTypes.shape({
  fast: PropTypes.arrayOf(
    PropTypes.shape({
      damage: PropTypes.number,
    }),
  ),
  special: PropTypes.arrayOf(
    PropTypes.shape({
      damage: PropTypes.number,
    }),
  ),
});

DamageDifference.propTypes = {
  attacks: damageDifferencePropTypes.isRequired,
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
