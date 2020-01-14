import { createSelector } from 'reselect';

export const getLoadingObj = createSelector(
  (state) => state,
  (state) => state.isLoading,
);

export const getLoading = createSelector(
  getLoadingObj,
  (state) => state.loading,
);