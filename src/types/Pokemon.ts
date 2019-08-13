export interface IAttack {
  name: string;
  type: string;
  damage: number;
}

export interface IAttacks {
  fast: IAttack[];
  special: IAttack[];
}

export interface IEvolutionRequirements {
  name: string;
  amount: number;
}

export interface IRange {
  minimum: string;
  maximum: string;
}

export interface IPokemon {
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
  height: IRange;
  weight: IRange;
  attacks: IAttacks;
  evolutionRequirements: IEvolutionRequirements;
  evolutions: IPokemon[];
}
