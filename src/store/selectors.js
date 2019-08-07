import { createSelector } from 'reselect';

const favorites = s => s.favorite;
// const compares = s => s.compare;

export const inFavorites = createSelector(
  [favorites, (_, { id }) => id],
  (fav, id) => fav.includes(id),
);
