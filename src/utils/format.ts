// eslint-disable no-unused-vars

import { IAttack, IAttacks, IRange, IEvolutionRequirements, IPokemon } from 'types/Pokemon';

const SMALLEST = 1;
const HIGHEST = 2;

const findEstDmgReducer = (n: number) => (previous: number, current: IAttack): number => {
  if (Array.isArray(current)) {
    return current.reduce(findEstDmgReducer(n), previous);
  }

  if (previous === -1) {
    return current.damage;
  }

  if (n === SMALLEST) {
    return Math.min(previous, current.damage);
  }

  return Math.max(previous, current.damage);
};

const findEstDmg = (n: number, obj: IAttacks) => Object.values(obj).reduce(findEstDmgReducer(n), -1);

export const dash = 'ꟷ';

export const damageDiff = (o: IAttacks) =>
  o && Array.isArray(o.fast) && Array.isArray(o.special)
    ? `${findEstDmg(SMALLEST, o)} - ${findEstDmg(HIGHEST, o)}`
    : dash;

const dashOrInfo = <T>(o: T, callback: (p: T) => string) => {
  if (!o) {
    return dash;
  }

  return callback(o);
};

interface IAdaptedPokemon {
  [key: string]: string;
}

export const adapt = (pokemon: IPokemon) => {
  const obj: IAdaptedPokemon = {};

  obj.height = dashOrInfo<IRange>(pokemon.height, o => `${o.minimum} - ${o.maximum}`);
  obj.weight = dashOrInfo<IRange>(pokemon.weight, o => `${o.minimum} - ${o.maximum}`);
  obj.damage = dashOrInfo<IAttacks>(pokemon.attacks, o => damageDiff(o));
  obj.fleeRate = dashOrInfo<number>(pokemon.fleeRate, o => `${Math.floor(o * 100)}%`);
  obj.maxCP = dashOrInfo<number>(pokemon.maxCP, o => `${o} CP`);
  obj.maxHP = dashOrInfo<number>(pokemon.maxHP, o => `${o} HP`);
  obj.evolutionRequirements = dashOrInfo<IEvolutionRequirements>(
    pokemon.evolutionRequirements,
    o => `${o.amount} ${o.name}`,
  );
  obj.classification = dashOrInfo<string>(pokemon.classification, o => o);

  return obj;
};
