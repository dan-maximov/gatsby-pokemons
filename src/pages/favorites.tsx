import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import SEO from 'components/Seo';
import PokemonsList from 'components/PokemonsList';
import EmptyFavorites from 'components/EmptyFavorites';
import { Pokemon } from 'types/Pokemon';

const query = graphql`
  query {
    pokeApi {
      pokemons(first: 151) {
        ...PokemonCard
      }
    }
  }
`;

const Title = styled.h2`
  padding: 0 16px;
`;

interface Props {
  favorite: string[];
}

const Favorites: React.FC<Props> = ({ favorite }) => {
  const data = useStaticQuery(query);
  const pokemons = data.pokeApi.pokemons.filter(({ id }: Pokemon) => favorite.includes(id));

  return (
    <>
      <SEO title="Favorite pokemons" />
      <PokemonsList pokemons={pokemons} EmptyState={EmptyFavorites} title={<Title>Favorites</Title>} />
    </>
  );
};

const enhance = connect<Props, {}, {}, Props>('favorite');

export default enhance(Favorites);
