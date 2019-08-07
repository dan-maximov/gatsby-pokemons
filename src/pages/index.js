import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/Seo';
import PokemonsList from '../components/PokemonsList';

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
    <React.Fragment>
      <SEO title="" />
      <PokemonsList pokemons={data.pokeApi.pokemons} />
    </React.Fragment>
  );
};

export default IndexPage;
