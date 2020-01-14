import { takeLatest } from 'redux-saga/effects';

import { fetchPeopleDataSaga } from '../sagas/fetchPeopleDataSaga'
import { fetchProductInfoSaga } from '../sagas/fetchProductInfoSaga'
import { makeOrderSaga } from '../sagas/makeOrderSaga'

import {FETCH_PEOPLE_DATA, FETCH_INFO_DATA, MAKE_ORDER} from '../constants/actionTypes'

const mainSagas = [
    takeLatest(FETCH_PEOPLE_DATA, fetchPeopleDataSaga),
    takeLatest(FETCH_INFO_DATA, fetchProductInfoSaga),
    takeLatest(MAKE_ORDER, makeOrderSaga),
];

export default mainSagas;