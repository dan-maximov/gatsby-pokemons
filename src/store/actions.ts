import { IStore } from 'types/Store';

const immutableUniqPush = (arr: string[], item: string) => (arr.includes(item) ? arr : [...arr, item]);

export const addToFavorites = (s: IStore, id: string) => ({
  favorite: immutableUniqPush(s.favorite, id),
});

export const deleteFromFavorites = (s: IStore, id: string) => ({
  favorite: s.favorite.filter(i => i !== id),
});

export const addToCompares = (s: IStore, id: string) => ({
  compare: immutableUniqPush(s.compare, id),
});

export const deleteFromCompares = (s: IStore, id: string) => ({
  compare: s.compare.filter(i => i !== id),
});
