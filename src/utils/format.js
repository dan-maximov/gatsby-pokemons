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

export const damageDiff = o => `${findEstDmg(SMALLEST, o)} - ${findEstDmg(HIGHEST, o)}`;

export default undefined;

export const pageStats = [
  {
    title: 'Height',
    extractor: ({ height }) => `${height.minimum} - ${height.maximum}`,
  },
  {
    title: 'Weight',
    extractor: ({ weight }) => `${weight.minimum} - ${weight.maximum}`,
  },
  {
    title: 'Damage',
    extractor: ({ attacks }) => damageDiff(attacks),
  },
  {
    title: 'Flee Rate',
    extractor: ({ fleeRate }) => `${Math.floor(fleeRate * 100)}%`,
  },
  {
    title: 'Max CP',
    extractor: ({ maxCP }) => `${maxCP} CP`,
  },
  {
    title: 'Max HP',
    extractor: ({ maxHP }) => `${maxHP} HP`,
  },
  {
    title: 'Evolution Requirement',
    extractor: ({ evolutionRequirements }) =>
      evolutionRequirements ? `${evolutionRequirements.amount} ${evolutionRequirements.name}` : '一',
  },
];

export const comparesStats = [
  {
    title: 'Height',
    extractor: ({ height }) => `${height.minimum} - ${height.maximum}`,
  },
  {
    title: 'Weight',
    extractor: ({ weight }) => `${weight.minimum} - ${weight.maximum}`,
  },
  {
    title: 'Damage',
    extractor: ({ attacks }) => damageDiff(attacks),
  },
  {
    title: 'Flee Rate',
    extractor: ({ fleeRate }) => fleeRate,
  },
  {
    title: 'Max CP',
    extractor: ({ maxCP }) => maxCP,
  },
  {
    title: 'Max HP',
    extractor: ({ maxHP }) => maxHP,
  },
  {
    title: 'Classification',
    extractor: ({ classification }) => classification,
  },
];
