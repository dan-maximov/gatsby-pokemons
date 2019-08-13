import createStore, { Store } from 'unistore';
import devtools from 'unistore/devtools';
import { getJSON, setJSON } from '../utils/cookie';
import { Store as State } from 'types/Store';

const storeKey = 'store-v1';

const clone = (a: Store<State>) => a;
const initialStore = {
  favorite: [],
  compare: [],
};

const create = () => {
  const persistedState = getJSON(storeKey);

  const wrapper = process.env.NODE_ENV === 'production' ? clone : devtools;
  const store = wrapper(createStore(persistedState || initialStore));

  store.subscribe((s: State) => setJSON<State>(storeKey, s));

  return store;
};

export default create;
