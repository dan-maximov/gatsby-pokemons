import React from 'react';
import styled from 'styled-components';
import PokemonCard from 'components/PokemonCard';
import { Pokemon } from 'types/Pokemon';

const Title = styled.p`
  font-size: 24px;
  padding: 16px 16px 0;
`;

const PokeCard = styled(PokemonCard)`
  width: 200px;
  min-width: 200px;
`;

const List = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 16px;

  & ${PokeCard} {
    :not(:first-child) {
      margin-left: 16px;
    }
  }
`;

const LastGenMsg = styled.p`
  padding: 16px;
`;

interface Props {
  evolutions: Pokemon[];
}

const EvolutionsList: React.FC<Props> = ({ evolutions }) => {
  if (!evolutions || evolutions.length === 0) {
    return (
      <>
        <Title>Evolutions</Title>
        <LastGenMsg>This is the last generation.</LastGenMsg>
      </>
    );
  }

  return (
    <>
      <Title>Evolutions</Title>
      <List>{evolutions && evolutions.map(p => <PokeCard data={p} key={p.id} />)}</List>
    </>
  );
};

export default EvolutionsList;
