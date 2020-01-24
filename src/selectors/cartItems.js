import { createSelector } from 'reselect';

export const getCartItems = createSelector(
  (state) => state,
  (state) => state.cartItems,
);

