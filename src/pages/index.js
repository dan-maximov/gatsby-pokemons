import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Pokemon from '../components/PokemonCard';
import SEO from '../components/Seo';

const query = graphql`
  query {
    pokeApi {
      pokemons(first: 150) {
        ...PokemonCard
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <SEO title="Home" />
      {data.pokeApi.pokemons.map(pokemon => (
        <Pokemon data={pokemon} />
      ))}
    </>
  );
};

export default IndexPage;
