import { createSelector } from 'reselect';
import { Store } from 'types/Store';

const favorites = (s: Store) => s.favorite;
const compares = (s: Store) => s.compare;

interface State {
  id: string;
}

export const inFavorites = createSelector<Store, State, string[], string, boolean>(
  [favorites, (_: Store, { id }: State) => id],
  (fav, id) => fav.includes(id),
);

export const inCompares = createSelector<Store, State, string[], string, boolean>(
  [compares, (_: Store, { id }: State) => id],
  (comp, id) => comp.includes(id),
);
