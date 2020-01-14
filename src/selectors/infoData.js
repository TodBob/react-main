import { createSelector } from 'reselect';

export const getInfoData = createSelector(
  (state) => state,
  (state) => state.infoData,
);
