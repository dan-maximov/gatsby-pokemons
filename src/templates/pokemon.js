import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { comparesStats } from '../utils/format';
import Stat from '../components/Stat';
import Accordeon from '../components/Accordeon';
import TypesList from '../components/TypesList';
import { attack } from '../components/Attack';
import AttackList from '../components/AttackList';
import AddToFavorites from '../components/AddToFavorites';
import AddToCompares from '../components/AddToCompares';
import { pokeCardPropTypes } from '../components/PokemonCard';
import EvolutionsList from '../components/EvolutionsList';

const Head = styled.div`
  margin-top: 16px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin: 16px 16px 0;
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

const Classification = styled.h2`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 16px;
`;

const PokemonPage = ({ pokemon }) => (
  <>
    <Head>
      <ImageWrapper>
        <img src={pokemon.image} alt={pokemon.name} />
      </ImageWrapper>
      <Details>
        <h1>{`${pokemon.name} - ${pokemon.number}`}</h1>
        <Classification>{pokemon.classification}</Classification>
        {comparesStats.map(s => (
          <Stat key={s.title} title={s.title} value={s.extractor(pokemon)} />
        ))}
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
      <EvolutionsList evolutions={pokemon.evolutions} />
    </Footer>
  </>
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
    evolutions: PropTypes.arrayOf(pokeCardPropTypes),
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

        evolutions {
          ...PokemonCard
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
