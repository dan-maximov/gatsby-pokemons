import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { connect } from 'unistore/react';
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

const Favorites = ({ favorite }) => {
  const data = useStaticQuery(query);
  const pokemons = data.pokeApi.pokemons.filter(({ id }) => favorite.includes(id));

  return (
    <React.Fragment>
      <SEO title="Favorites" />
      <PokemonsList pokemons={pokemons} />
    </React.Fragment>
  );
};

Favorites.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const enhance = connect('favorite');

export default enhance(Favorites);
