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
  max-width: 300px;
`;

const EmptyState = () => (
  <Wrapper>
    <div>
      <Image src="/EmptyCompares.png" alt="Giant Charmander attacks Bikini Bottom" />
    </div>
    <p>Pokemons to compare was not found</p>
  </Wrapper>
);

export default EmptyState;
