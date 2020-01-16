import { createSelector } from 'reselect';

export const getPeopleData = createSelector(
  (state) => state,
  (state) => state.peopleData,
);

