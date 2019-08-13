import React from 'react';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import LazyImage from 'components/LazyImage';
import DamageDifference from 'components/DamageDifference';
import { Pokemon } from 'types/Pokemon';

const widthStyle = css`
  width: 23%;

  @media (max-width: 960px) {
    width: 32%;
  }

  @media (max-width: 550px) {
    width: 48%;
  }
`;

const imageStyle = css`
  position: absolute;
  max-height: 90%;
  max-width: 90%;
  height: auto;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Image = styled(LazyImage)`
  ${imageStyle}
`;

const NoJSImage = styled.img`
  ${imageStyle}
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  p {
    margin: 0;
  }
`;

const PokeNumber = styled.span`
  @media (max-width: 666px) {
    display: none;
  }
`;

interface Props {
  data: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ data, ...props }) => (
  <Card to={`/${data.id}`} {...props}>
    <ImageWrapper>
      <noscript>
        <NoJSImage src={data.image} alt={data.name} />
      </noscript>
      <Image src={data.image} alt={data.name} />
    </ImageWrapper>
    <Title>
      <p>
        <span>{data.name}</span>
        <PokeNumber>{` - ${data.number}`}</PokeNumber>
      </p>
      <div>
        <span role="img" aria-label="fist">
          👊
        </span>
        <DamageDifference attacks={data.attacks} />
      </div>
    </Title>
  </Card>
);

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
