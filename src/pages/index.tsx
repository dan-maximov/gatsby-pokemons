import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from 'components/Seo';
import PokemonsList from 'components/PokemonsList';

const query = graphql`
  query {
    pokeApi {
      pokemons(first: 151) {
        ...PokemonCard
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <SEO title="PokeList - Pokemons Catalog" />
      <PokemonsList pokemons={data.pokeApi.pokemons} home={true} />
    </>
  );
};

export default IndexPage;
