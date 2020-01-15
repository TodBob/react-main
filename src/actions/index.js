import {
  GET_PEOPLE_DATA,
  GET_DATA_INFO,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  MAKE_ORDER,
  SET_LOADING,
  SET_ORDERING,
  IS_ERROR,
  FETCH_PEOPLE_DATA,
  FETCH_INFO_DATA,
  UPDATE_CART
} from '../constants/actionTypes'

export const peopleData = () => ({
  type: GET_PEOPLE_DATA
});

export const getDataInfo = data => ({
  type: GET_DATA_INFO,
  data
});

export const addToCart = data => ({
  type: ADD_TO_CART,
  data
})

export const removeFromCart = data => ({
  type: REMOVE_FROM_CART,
  data
})

export const makeOrder = () => ({
  type: MAKE_ORDER
})

export const setLoading = (data) => ({
  type: SET_LOADING,
  data
})

export const setOrdering = (data) => ({
  type: SET_ORDERING,
  data
})

export const isError = (data) => ({
  type: IS_ERROR,
  data
})

export const fetchPeopleData = () => ({
  type: FETCH_PEOPLE_DATA
})

export const fetchInfoData = (data) => ({
  type: FETCH_INFO_DATA,
  data
})

export const updateCart = (data) => ({
  type: UPDATE_CART,
  data
})
