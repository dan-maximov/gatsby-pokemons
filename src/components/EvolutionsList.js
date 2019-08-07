import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PokemonCard, { pokeCardPropTypes } from './PokemonCard';

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

const EvolutionsList = ({ evolutions }) => {
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
      <List>{evolutions && evolutions.map(p => <PokeCard data={p} />)}</List>
    </>
  );
};

EvolutionsList.propTypes = {
  evolutions: PropTypes.arrayOf(pokeCardPropTypes).isRequired,
};

export default EvolutionsList;
