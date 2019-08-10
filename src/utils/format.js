const SMALLEST = 1;
const HIGHEST = 2;

const findEstDmgReducer = n => (previous, current) => {
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

const findEstDmg = (n, obj) => Object.values(obj).reduce(findEstDmgReducer(n), -1);

export const dash = 'ꟷ';

export const damageDiff = o =>
  o && Array.isArray(o.fast) && Array.isArray(o.special)
    ? `${findEstDmg(SMALLEST, o)} - ${findEstDmg(HIGHEST, o)}`
    : dash;

const dashOrInfo = (o, callback) => {
  if (!o) {
    return dash;
  }

  return callback(o);
};

export const adapt = pokemon => {
  const obj = {};

  obj.height = dashOrInfo(pokemon.height, o => `${o.minimum} - ${o.maximum}`);
  obj.weight = dashOrInfo(pokemon.weight, o => `${o.minimum} - ${o.maximum}`);
  obj.damage = dashOrInfo(pokemon.attacks, o => damageDiff(o));
  obj.fleeRate = dashOrInfo(pokemon.fleeRate, o => `${Math.floor(o * 100)}%`);
  obj.maxCP = dashOrInfo(pokemon.maxCP, o => `${o} CP`);
  obj.maxHP = dashOrInfo(pokemon.maxHP, o => `${o} HP`);
  obj.evolutionRequirements = dashOrInfo(pokemon.evolutionRequirements, o => `${o.amount} ${o.name}`);
  obj.classification = dashOrInfo(pokemon.classification, o => o);

  return obj;
};
