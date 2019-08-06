import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const PokemonPage = ({ data }) => (
  <>
    <p>{data.pokeApi.pokemon.name}</p>
    <p>{data.pokeApi.pokemon.classification}</p>
  </>
);

PokemonPage.propTypes = {
  data: PropTypes.objectOf({
    pokeApi: PropTypes.objectOf({
      pokemon: PropTypes.objectOf({
        name: PropTypes.string,
        classification: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    pokeApi {
      pokemon(id: $slug) {
        name
        classification
      }
    }
  }
`;

export default PokemonPage;
