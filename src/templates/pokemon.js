import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Stat from '../components/Stat';
import DamageDifference from '../components/DamageDifference';
import Accordeon from '../components/Accordeon';
import Type from '../components/Type';
import AddToFavorites from '../components/AddToFavorites';

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

const TypesList = styled.div`
  display: flex;

  & > div {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
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
        <AddToFavorites id={pokemon.id} />
      </Details>
    </Head>
    <Footer>
      <Accordeon title="Types">
        <TypesList>
          {pokemon.types.map(t => (
            <Type name={t} key={t} />
          ))}
        </TypesList>
      </Accordeon>
      <Accordeon title="Resistants">
        <TypesList>
          {pokemon.resistant.map(t => (
            <Type name={t} key={t} />
          ))}
        </TypesList>
      </Accordeon>
    </Footer>
  </React.Fragment>
);

PokemonPage.propTypes = {
  pokemon: PropTypes.objectOf({
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
    height: PropTypes.objectOf({
      minimum: PropTypes.string,
      maximum: PropTypes.string,
    }),
    weight: PropTypes.objectOf({
      minimum: PropTypes.string,
      maximum: PropTypes.string,
    }),
    attacks: PropTypes.objectOf({
      fast: PropTypes.objectOf({
        damage: PropTypes.number,
      }),
      special: PropTypes.objectOf({
        damage: PropTypes.number,
      }),
    }),
    evolutionRequirements: PropTypes.objectOf({
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

        ...AttacksDifference
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const selector = Component => ({ data, ...props }) => (
  <Component {...props} pokemon={data.pokeApi.pokemon} /> // eslint-disable-line react/prop-types
);

export default selector(PokemonPage);
