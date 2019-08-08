import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pokemon, { CardPlaceholder, pokeCardPropTypes } from './PokemonCard';
import InfinityScrollObserver from './InfinityScrollObserver';

const Wrapper = styled.div`
  padding-top: 16px;

  & > h1 {
    margin: 0 0 16px;
  }
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const placeholdersArray = new Array(4).fill().map((_, i) => i + 1234);

const PokemonsList = ({ pokemons, EmptyState, title }) => {
  if (pokemons.length === 0) {
    return (
      <Wrapper>
        {title}
        <Inner>
          <EmptyState />
        </Inner>
      </Wrapper>
    );
  }

  const [displayableQuantity, setDisplayableQuantity] = useState(20);

  return (
    <Wrapper>
      {title}
      <Inner>
        {pokemons.slice(0, displayableQuantity).map(pokemon => (
          <Pokemon key={pokemon.id} data={pokemon} />
        ))}
        {placeholdersArray.map(i => (
          <CardPlaceholder key={i} />
        ))}
        <InfinityScrollObserver
          max={pokemons.length}
          current={displayableQuantity}
          increaseQuantity={10}
          increaseFunc={setDisplayableQuantity}
        />
      </Inner>
    </Wrapper>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(pokeCardPropTypes).isRequired,
  EmptyState: PropTypes.oneOfType([PropTypes.func, PropTypes.symbol]),
  title: PropTypes.node,
};

PokemonsList.defaultProps = {
  EmptyState: React.Fragment,
  title: undefined,
};

export default PokemonsList;
