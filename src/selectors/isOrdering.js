import { createSelector } from 'reselect';

export const getOrderingObj = createSelector(
    (state) => state,
    (state) => state.setOrdering,
);

export const getOrdering = createSelector(
    getOrderingObj,
    (state) => state.ordering,
);