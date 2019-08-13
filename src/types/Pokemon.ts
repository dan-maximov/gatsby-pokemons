export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface EvolutionRequirements {
  name: string;
  amount: number;
}

export interface Range {
  minimum: string;
  maximum: string;
}

export interface Pokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  classification: string;
  types: string[];
  resistant: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  height: Range;
  weight: Range;
  attacks: Attacks;
  evolutionRequirements: EvolutionRequirements;
  evolutions: Pokemon[];
}
