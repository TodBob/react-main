import { createSelector } from 'reselect';

export const getCartItems = createSelector(
  (state) => state,
  (state) => state.cartItems,
);

/* export const getDataArray = createSelector(
  getPeopleData,
  (state) => state.data,
); */
