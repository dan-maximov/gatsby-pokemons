import createStore from 'unistore';
import devtools from 'unistore/devtools';
import { getJSON, setJSON } from '../utils/cookie';
import { IStore } from 'types/Store';

const storeKey = 'store-v1';

const clone = (a: any) => a;
const initialStore = {
  favorite: [],
  compare: [],
};

const create = () => {
  const persistedState = getJSON(storeKey);

  const wrapper = process.env.NODE_ENV === 'production' ? clone : devtools;
  const store = wrapper(createStore(persistedState || initialStore));

  store.subscribe((s: IStore) => setJSON(storeKey, s));

  return store;
};

export default create;
