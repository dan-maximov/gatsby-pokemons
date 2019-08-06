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

const findEstDmg = (n, obj) =>
  Object.values(obj).reduce(findEstDmgReducer(n), -1);

export const damageDiff = o =>
  `${findEstDmg(SMALLEST, o)} - ${findEstDmg(HIGHEST, o)}`;

export default undefined;
