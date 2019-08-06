import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Pokemon, { CardPlaceholder } from '../components/PokemonCard';
import SEO from '../components/Seo';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const placeholdersArray = new Array(4).fill().map((_, i) => i + 1234);

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
    <Wrapper>
      <SEO title="Home" />
      {data.pokeApi.pokemons.map(pokemon => (
        <Pokemon data={pokemon} />
      ))}
      {placeholdersArray.map(i => (
        <CardPlaceholder key={i} />
      ))}
    </Wrapper>
  );
};

export default IndexPage;
