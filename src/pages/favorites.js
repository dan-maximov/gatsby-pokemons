import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import SEO from '../components/Seo';
import PokemonsList from '../components/PokemonsList';
import EmptyFavorites from '../components/EmptyFavorites';

const query = graphql`
  query {
    pokeApi {
      pokemons(first: 150) {
        ...PokemonCard
      }
    }
  }
`;

const Title = styled.h2`
  padding: 0 16px;
`;

const Favorites = ({ favorite }) => {
  const data = useStaticQuery(query);
  const pokemons = data.pokeApi.pokemons.filter(({ id }) => favorite.includes(id));

  return (
    <>
      <SEO title="Favorite pokemons" />
      <PokemonsList pokemons={pokemons} EmptyState={EmptyFavorites} title={<Title>Favorites</Title>} />
    </>
  );
};

Favorites.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const enhance = connect('favorite');

export default enhance(Favorites);
