import { createSelector } from 'reselect';

export const getOrdering = createSelector(
  state => state,
  state => state.isOrdering
);

