import {
  GET_PEOPLE_DATA,
  MAKE_ORDER,
  SET_LOADING,
  SET_ORDERING,
  SET_ERROR,
  FETCH_PEOPLE_DATA,
  FETCH_INFO_DATA,
  UPDATE_CART,
} from '../constants/actionTypes';

export const peopleData = () => ({
  type: GET_PEOPLE_DATA,
});

export const makeOrder = () => ({
  type: MAKE_ORDER,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  data,
});

export const setOrdering = (data) => ({
  type: SET_ORDERING,
  data,
});

export const setError = (data) => ({
  type: SET_ERROR,
  data,
});

export const fetchPeopleData = () => ({
  type: FETCH_PEOPLE_DATA,
});

export const fetchInfoData = (data) => ({
  type: FETCH_INFO_DATA,
  data,
});

export const updateCart = (data) => ({
  type: UPDATE_CART,
  data,
});
