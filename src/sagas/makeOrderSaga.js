import { put, delay } from "redux-saga/effects";

import {
    MAKE_ORDER,
    SET_ORDERING,
  } from '../constants/actionTypes'

export function* makeOrderSaga() {
    yield put({ type: SET_ORDERING, data: true });
    yield delay(3000);
    yield put({ type: MAKE_ORDER });
    yield put({ type: SET_ORDERING, data: false });
}