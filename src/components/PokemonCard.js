import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  display: block;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const PokemonCard = ({ data }) => (
  <Wrapper to={data.id}>
    <img src={data.image} alt={data.name} />
    <p>{data.name}</p>
  </Wrapper>
);

PokemonCard.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export const query = graphql`
  fragment PokemonCard on PokeAPI_Pokemon {
    id
    name
    image
  }
`;

export default PokemonCard;
