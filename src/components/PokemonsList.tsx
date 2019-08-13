import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PokemonCard, { CardPlaceholder } from 'components/PokemonCard';
import InfinityScrollObserver from 'components/InfinityScrollObserver';
import { Pokemon } from 'types/Pokemon';

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

const placeholdersArray = new Array(4).fill(undefined).map((_, i) => i + 1234);

interface CustomWindow extends Window {
  __listScrolled__: number;
}

declare const window: CustomWindow;

interface Props {
  pokemons: Pokemon[];
  EmptyState?: React.FC;
  title?: string | React.ReactNode;
  home?: boolean;
}

const PokemonsList: React.FC<Props> = ({ pokemons, EmptyState, title, home = false }) => {
  if (pokemons.length === 0) {
    return (
      <Wrapper>
        {title}
        <Inner>{EmptyState && <EmptyState />}</Inner>
      </Wrapper>
    );
  }

  const initialValue = home && typeof window !== 'undefined' && window.__listScrolled__ ? window.__listScrolled__ : 20;
  const [displayableQuantity, setDisplayableQuantity] = useState(initialValue);

  useEffect(() => {
    if (home) {
      window.__listScrolled__ = displayableQuantity;
    }
  }, [displayableQuantity]);

  return (
    <Wrapper>
      {title}
      <Inner>
        {pokemons.slice(0, displayableQuantity).map(pokemon => (
          <PokemonCard key={pokemon.id} data={pokemon} />
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

PokemonsList.defaultProps = {
  title: undefined,
  home: false,
};

export default PokemonsList;
