import { takeLatest } from 'redux-saga/effects';

import { fetchPeopleDataSaga } from '../sagas/fetchPeopleDataSaga'
import { fetchProductInfoSaga } from '../sagas/fetchProductInfoSaga'
import { makeOrderSaga } from '../sagas/makeOrderSaga'


const mainSagas = [
    takeLatest(FETCH_DESTINATION_DATA, fetchPeopleDataSaga),
    takeLatest(FETCH_DESTINATIONS, fetchProductInfoSaga),
    takeLatest(FETCH_DESTINATION_TYPES, makeOrderSaga),
];

export default mainSagas;