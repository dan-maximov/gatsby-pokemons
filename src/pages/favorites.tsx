import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import SEO from 'components/Seo';
import PokemonsList from 'components/PokemonsList';
import EmptyFavorites from 'components/EmptyFavorites';
import { IPokemon } from 'types/Pokemon';

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

interface IProps {
  favorite: string[];
}

const Favorites = ({ favorite }: IProps) => {
  const data = useStaticQuery(query);
  const pokemons = data.pokeApi.pokemons.filter(({ id }: IPokemon) => favorite.includes(id));

  return (
    <>
      <SEO title="Favorite pokemons" />
      <PokemonsList pokemons={pokemons} EmptyState={EmptyFavorites} title={<Title>Favorites</Title>} />
    </>
  );
};

const enhance = connect<IProps, {}, {}, IProps>('favorite');

export default enhance(Favorites);
