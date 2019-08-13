import { createSelector } from 'reselect';
import { IStore } from 'types/Store';

const favorites = (s: IStore) => s.favorite;
const compares = (s: IStore) => s.compare;

interface IState {
  id: string;
}

export const inFavorites = createSelector<IStore, IState, string[], string, boolean>(
  [favorites, (_: any, { id }: IState) => id],
  (fav, id) => fav.includes(id),
);

export const inCompares = createSelector<IStore, IState, string[], string, boolean>(
  [compares, (_: any, { id }: IState) => id],
  (comp, id) => comp.includes(id),
);
