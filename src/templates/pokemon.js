import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Stat from '../components/Stat';
import DamageDifference from '../components/DamageDifference';
import Accordeon from '../components/Accordeon';
import TypesList from '../components/TypesList';
import { attack } from '../components/Attack';
import AttackList from '../components/AttackList';
import AddToFavorites from '../components/AddToFavorites';
import AddToCompares from '../components/AddToCompares';

const Head = styled.div`
  padding-top: 16px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding: 16px 16px 0;
  }
`;

const Footer = styled.div`
  padding-top: 16px;
  @media (max-width: 800px) {
    padding: 16px 16px 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Details = styled.div`
  width: 100%;
  margin-left: 32px;

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 32px;
  }
`;

const Name = styled.h1`
  margin: 0;
`;

const Classification = styled.h2`
  font-size: 1em;
  margin: 0;
  margin-bottom: 16px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 1em;
`;

const PokemonPage = ({ pokemon }) => (
  <React.Fragment>
    <Head>
      <ImageWrapper>
        <img src={pokemon.image} alt={pokemon.name} />
      </ImageWrapper>
      <Details>
        <Name>{`${pokemon.name} - ${pokemon.number}`}</Name>
        <Classification>{pokemon.classification}</Classification>
        <Stat title="Height" value={`${pokemon.height.minimum} - ${pokemon.height.maximum}`} />
        <Stat title="Weight" value={`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`} />
        <Stat title="Damage" value={<DamageDifference attacks={pokemon.attacks} />} />
        <Stat title="Flee Rate" value={`${Math.floor(pokemon.fleeRate * 100)}%`} />
        <Stat title="Max CP" value={`${pokemon.maxCP} CP`} />
        <Stat title="Max HP" value={`${pokemon.maxHP} HP`} />
        <Stat
          title="Evolution Requirement"
          value={
            pokemon.evolutionRequirements
              ? `${pokemon.evolutionRequirements.amount} ${pokemon.evolutionRequirements.name}`
              : '一'
          }
        />
        <Buttons>
          <AddToFavorites id={pokemon.id} />
          <AddToCompares id={pokemon.id} />
        </Buttons>
      </Details>
    </Head>
    <Footer>
      <Accordeon title="Types">
        <TypesList types={pokemon.types} />
      </Accordeon>
      <Accordeon title="Resistants">
        <TypesList types={pokemon.resistant} />
      </Accordeon>
      <Accordeon title="Attacks">
        <AttackList title="Fast" attacks={pokemon.attacks.fast} />
        <AttackList title="Special" attacks={pokemon.attacks.special} />
      </Accordeon>
    </Footer>
  </React.Fragment>
);

PokemonPage.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    image: PropTypes.string,
    classification: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    resistant: PropTypes.arrayOf(PropTypes.string),
    fleeRate: PropTypes.number.isRequired,
    maxCP: PropTypes.number.isRequired,
    maxHP: PropTypes.number.isRequired,
    height: PropTypes.shape({
      minimum: PropTypes.string,
      maximum: PropTypes.string,
    }),
    weight: PropTypes.shape({
      minimum: PropTypes.string,
      maximum: PropTypes.string,
    }),
    attacks: PropTypes.shape({
      fast: PropTypes.arrayOf(attack),
      special: PropTypes.arrayOf(attack),
    }),
    evolutionRequirements: PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    pokeApi {
      pokemon(id: $slug) {
        id
        name
        number
        image
        classification
        types
        resistant
        fleeRate
        maxCP
        maxHP

        height {
          minimum
          maximum
        }

        weight {
          minimum
          maximum
        }

        evolutionRequirements {
          name
          amount
        }

        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const selector = Component => ({ data, ...props }) => (
  <Component {...props} pokemon={data.pokeApi.pokemon} /> // eslint-disable-line react/prop-types
);

export default selector(PokemonPage);
