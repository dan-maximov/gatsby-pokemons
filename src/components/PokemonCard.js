import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';

const widthStyle = css`
  width: 23%;
`;

export const CardPlaceholder = styled.div`
  ${widthStyle}
`;

const Card = styled(Link)`
  text-decoration: none;
  color: #000;
  display: block;
  background: #fff;
  ${widthStyle}
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const Image = styled.img`
  position: absolute;
  /* TODO: ie compatible */
  object-fit: scale-down;
  height: 90%;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  text-align: center;
`;

const PokemonCard = ({ data }) => (
  <Card to={data.id}>
    <ImageWrapper>
      <Image src={data.image} alt={data.name} />
    </ImageWrapper>
    <Title>{data.name}</Title>
  </Card>
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
