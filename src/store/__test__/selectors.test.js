import { inFavorites, inCompares } from '../selectors';

const stateWithoutId = {
  favorite: [],
  compare: [],
};

const stateWithId = {
  favorite: ['A'],
  compare: ['A'],
};

describe('favorites', () => {
  it('returns false', () => {
    expect(inFavorites(stateWithoutId, { id: 'A' })).toBeFalsy();
  });
  it('returns true', () => {
    expect(inFavorites(stateWithId, { id: 'A' })).toBeTruthy();
  });
});

describe('favorites', () => {
  it('returns false', () => {
    expect(inCompares(stateWithoutId, { id: 'A' })).toBeFalsy();
  });
  it('returns true', () => {
    expect(inCompares(stateWithId, { id: 'A' })).toBeTruthy();
  });
});
