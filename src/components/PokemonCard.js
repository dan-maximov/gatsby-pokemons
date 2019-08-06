import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import DamageDifference from './DamageDifference';

const widthStyle = css`
  width: 23%;

  @media (max-width: 960px) {
    width: 32%;
  }

  @media (max-width: 666px) {
    width: 48%;
  }
`;

export const CardPlaceholder = styled.div`
  ${widthStyle}
`;

const Card = styled(Link)`
  text-decoration: none;
  color: #000;
  border-radius: 8px;
  display: block;
  background: #fff;
  ${widthStyle}
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
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

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  p {
    margin: 0;
  }
`;

const PokemonCard = ({ data }) => (
  <Card to={data.id}>
    <ImageWrapper>
      <Image src={data.image} alt={data.name} />
    </ImageWrapper>
    <Title>
      <p>{`${data.name} - ${data.number}`}</p>
      <div>
        <span role="img" aria-label="fist">
          👊
        </span>
        <DamageDifference attacks={data.attacks} />
      </div>
    </Title>
  </Card>
);

PokemonCard.propTypes = {
  data: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    image: PropTypes.string,
    attacks: PropTypes.objectOf({
      fast: PropTypes.objectOf({
        damage: PropTypes.number,
      }),
      special: PropTypes.objectOf({
        damage: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  fragment PokemonCard on PokeAPI_Pokemon {
    id
    name
    number
    image
    ...AttacksDifference
  }
`;

export default PokemonCard;
