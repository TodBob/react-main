import { takeLatest } from 'redux-saga/effects';

import { fetchPeopleDataSaga } from './fetchPeopleDataSaga';
import { fetchProductInfoSaga } from './fetchProductInfoSaga';
import { makeOrderSaga } from './makeOrderSaga';
import { updateCartSaga } from './updateCartSaga';

import {
  FETCH_PEOPLE_DATA,
  FETCH_INFO_DATA,
  MAKE_ORDER,
  UPDATE_CART,
} from '../constants/actionTypes';

const mainSagas = [
  takeLatest(FETCH_PEOPLE_DATA, fetchPeopleDataSaga),
  takeLatest(FETCH_INFO_DATA, fetchProductInfoSaga),
  takeLatest(MAKE_ORDER, makeOrderSaga),
  takeLatest(UPDATE_CART, updateCartSaga),
];

export default mainSagas;
