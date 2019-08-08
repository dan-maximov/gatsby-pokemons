import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 658px;
`;

const EmptyState = () => (
  <Wrapper>
    <div>
      <Image src="./EmptyFavorites.png" alt="crying pikachu" />
    </div>
    <p>Favorite pokemons was not found</p>
  </Wrapper>
);

export default EmptyState;
