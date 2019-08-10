import { damageDiff, adapt, dash } from '../format';

const pokemon = JSON.parse(
  '{"id":"UG9rZW1vbjowMDE=","name":"Bulbasaur","number":"001","image":"https://img.pokemondb.net/artwork/bulbasaur.jpg","classification":"Seed Pokémon","types":["Grass","Poison"],"resistant":["Water","Electric","Grass","Fighting","Fairy"],"fleeRate":0.1,"maxCP":951,"maxHP":1071,"height":{"minimum":"0.61m","maximum":"0.79m"},"weight":{"minimum":"6.04kg","maximum":"7.76kg"},"evolutionRequirements":{"name":"Bulbasaur candies","amount":25},"attacks":{"fast":[{"name":"Tackle","type":"Normal","damage":12},{"name":"Vine Whip","type":"Grass","damage":7}],"special":[{"name":"Power Whip","type":"Grass","damage":70},{"name":"Seed Bomb","type":"Grass","damage":40},{"name":"Sludge Bomb","type":"Poison","damage":55}]},"evolutions":[{"id":"UG9rZW1vbjowMDI=","name":"Ivysaur","number":"002","image":"https://img.pokemondb.net/artwork/ivysaur.jpg","attacks":{"fast":[{"damage":15},{"damage":7}],"special":[{"damage":70},{"damage":55},{"damage":120}]}},{"id":"UG9rZW1vbjowMDM=","name":"Venusaur","number":"003","image":"https://img.pokemondb.net/artwork/venusaur.jpg","attacks":{"fast":[{"damage":15},{"damage":7}],"special":[{"damage":65},{"damage":55},{"damage":120}]}}]}',
);

describe('adapt', () => {
  it('returns dashes, because no info was provided', () =>
    Object.values(adapt({})).forEach(v => expect(v).toEqual(dash)));
  const formatted = adapt(pokemon);
  it('processes height', () => expect(formatted.height).toEqual('0.61m - 0.79m'));
  it('processes weight', () => expect(formatted.weight).toEqual('6.04kg - 7.76kg'));
  it('processes damage', () => expect(formatted.damage).toEqual('7 - 70'));
  it('processes maxHP', () => expect(formatted.maxHP).toEqual('1071 HP'));
  it('processes maxCP', () => expect(formatted.maxCP).toEqual('951 CP'));
  it('processes evolutionRequirements', () => expect(formatted.evolutionRequirements).toEqual('25 Bulbasaur candies'));
  it('processes classification', () => expect(formatted.classification).toEqual('Seed Pokémon'));
});

describe('damageDiff', () => {
  it('processes attacks', () => expect(damageDiff(pokemon.attacks)).toEqual('7 - 70'));
  it('returns dash, because no info was provided', () => expect(damageDiff({})).toEqual(dash));
});
