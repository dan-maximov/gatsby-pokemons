import { createSelector } from 'reselect';

const favorites = s => s.favorite;
const compares = s => s.compare;

export const inFavorites = createSelector(
  [favorites, (_, { id }) => id],
  (fav, id) => fav.includes(id),
);

export const inCompares = createSelector(
  [compares, (_, { id }) => id],
  (comp, id) => comp.includes(id),
);
