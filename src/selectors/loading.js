import { createSelector } from 'reselect';

export const getLoading = createSelector(
  (state) => state,
  (state) => state.isLoading,
);