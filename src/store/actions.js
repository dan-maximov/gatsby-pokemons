const immutableUniqPush = (arr, item) => (arr.includes(item) ? arr : [...arr, item]);

export const addToFavorites = (s, id) => ({
  favorite: immutableUniqPush(s.favorite, id),
});

export const deleteFromFavorites = (s, id) => ({
  favorite: s.favorite.filter(i => i !== id),
});
