import { createSelector } from 'reselect';

export const getPeopleData = createSelector(
  (state) => state,
  (state) => state.peopleData,
);

export const getDataArray = createSelector(
  getPeopleData,
  (state) => state.data,
);
