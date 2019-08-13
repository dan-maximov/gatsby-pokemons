import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { adapt } from 'utils/format';
import Stat from 'components/Stat';
import Accordeon from 'components/Accordeon';
import TypesList from 'components/TypesList';
import AttackList from 'components/AttackList';
import AddToFavorites from 'components/AddToFavorites';
import AddToCompares from 'components/AddToCompares';
import EvolutionsList from 'components/EvolutionsList';
import Seo from 'components/Seo';
import { IPokemon } from 'types/Pokemon';

const Head = styled.div`
  margin-top: 16px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin: 16px 16px 0;
  }
`;

const Footer = styled.div`
  padding-top: 16px;
`;

const ImageWrapper = styled.div`
  display: flex;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Details = styled.div`
  width: 100%;
  margin-left: 32px;

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 32px;
  }
`;

const Classification = styled.h2`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`;

interface IProps {
  pokemon: IPokemon;
}

const PokemonPage = ({ pokemon }: IProps) => {
  const formatted = adapt(pokemon);

  return (
    <>
      <Seo
        title={pokemon.name}
        description={`${pokemon.name} ${pokemon.classification} on PokeList`}
        image={pokemon.image}
      />
      <Head>
        <ImageWrapper>
          <Image src={pokemon.image} alt={pokemon.name} />
        </ImageWrapper>
        <Details>
          <h1>{`${pokemon.name} - ${pokemon.number}`}</h1>
          <Classification>{pokemon.classification}</Classification>
          <Stat title="Height" value={formatted.height} />
          <Stat title="Weight" value={formatted.weight} />
          <Stat title="Damage" value={formatted.damage} />
          <Stat title="Flee Rate" value={formatted.fleeRate} />
          <Stat title="Max CP" value={formatted.maxCP} />
          <Stat title="Max HP" value={formatted.maxHP} />
          <Stat title="Evolution Requirement" value={formatted.evolutionRequirements} />
          <Buttons>
            <AddToFavorites id={pokemon.id} />
            <AddToCompares id={pokemon.id} />
          </Buttons>
        </Details>
      </Head>
      <Footer>
        <Accordeon title="Types">
          <TypesList types={pokemon.types} />
        </Accordeon>
        <Accordeon title="Resistants">
          <TypesList types={pokemon.resistant} />
        </Accordeon>
        <Accordeon title="Attacks">
          <AttackList title="Fast" attacks={pokemon.attacks.fast} />
          <AttackList title="Special" attacks={pokemon.attacks.special} />
        </Accordeon>
        <EvolutionsList evolutions={pokemon.evolutions} />
      </Footer>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    pokeApi {
      pokemon(id: $slug) {
        id
        name
        number
        image
        classification
        types
        resistant
        fleeRate
        maxCP
        maxHP

        height {
          minimum
          maximum
        }

        weight {
          minimum
          maximum
        }

        evolutionRequirements {
          name
          amount
        }

        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }

        evolutions {
          ...PokemonCard
        }
      }
    }
  }
`;

interface IHocProp {
  data: {
    pokeApi: {
      pokemon: IPokemon;
    };
  };
}

// eslint-disable-next-line react/prop-types
const selector = (Component: React.FC<IProps>) => ({ data, ...props }: IHocProp) => (
  <Component {...props} pokemon={data.pokeApi.pokemon} /> // eslint-disable-line react/prop-types
);

export default selector(PokemonPage);
