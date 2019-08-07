import createStore from 'unistore';
import devtools from 'unistore/devtools';
import { getJSON, setJSON } from '../utils/cookie';

const storeKey = 'store-v1';

const clone = a => a;
const initialStore = {
  favorite: [],
  compare: [],
};

const create = () => {
  const persistedState = getJSON(storeKey);

  const wrapper = process.env.NODE_ENV === 'production' ? clone : devtools;
  const store = wrapper(createStore(persistedState || initialStore));

  store.subscribe(s => setJSON(storeKey, s));

  return store;
};

export default create;
