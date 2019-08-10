import { addToFavorites, deleteFromFavorites, addToCompares, deleteFromCompares } from '../actions';

describe('favorites', () => {
  const initialState = {
    favorite: [],
  };

  const stateWithId = {
    favorite: ['A'],
  };

  describe('addToFavorites', () => {
    it('adds id to favorites', () => {
      expect(addToFavorites(initialState, 'A')).toEqual(stateWithId);
    });

    it("doesn't adds to favorites existing id", () => {
      expect(addToFavorites(stateWithId, 'A')).toEqual(stateWithId);
    });
  });

  describe('deleteFromFavorites', () => {
    test('removes id from favarites', () => {
      expect(deleteFromFavorites(stateWithId, 'A')).toEqual(initialState);
    });

    test("doesn't deletes from favorites anything if it's empty", () => {
      expect(deleteFromFavorites(initialState, 'A')).toEqual(initialState);
    });

    test("doesn't deletes from favorites other id", () => {
      expect(deleteFromFavorites(stateWithId, 'B')).toEqual(stateWithId);
    });
  });
});

describe('compares', () => {
  const initialState = {
    compare: [],
  };

  const stateWithId = {
    compare: ['A'],
  };

  describe('addToCompares', () => {
    it('adds id to compares', () => {
      expect(addToCompares(initialState, 'A')).toEqual(stateWithId);
    });

    it("doesn't adds to compares existing id", () => {
      expect(addToCompares(stateWithId, 'A')).toEqual(stateWithId);
    });
  });

  describe('deleteFromCompares', () => {
    test('removes id from favarites', () => {
      expect(deleteFromCompares(stateWithId, 'A')).toEqual(initialState);
    });

    test("doesn't deletes from favorites anything if it's empty", () => {
      expect(deleteFromCompares(initialState, 'A')).toEqual(initialState);
    });

    test("doesn't deletes from favorites other id", () => {
      expect(deleteFromCompares(stateWithId, 'B')).toEqual(stateWithId);
    });
  });
});
