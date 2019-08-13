import { Store } from 'types/Store';

const immutableUniqPush = (arr: string[], item: string) => (arr.includes(item) ? arr : [...arr, item]);

export const addToFavorites = (s: Store, id: string) => ({
  favorite: immutableUniqPush(s.favorite, id),
});

export const deleteFromFavorites = (s: Store, id: string) => ({
  favorite: s.favorite.filter(i => i !== id),
});

export const addToCompares = (s: Store, id: string) => ({
  compare: immutableUniqPush(s.compare, id),
});

export const deleteFromCompares = (s: Store, id: string) => ({
  compare: s.compare.filter(i => i !== id),
});
