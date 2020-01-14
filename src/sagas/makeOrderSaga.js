import { put, cancel } from "redux-saga/effects";
import {
    MAKE_ORDER,
    SET_ORDERING,
  } from '../constants/actionTypes'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* makeOrderSaga() {
    yield put({ type: SET_ORDERING, data: true });
    yield delay(3000)
    yield put({ type: MAKE_ORDER })
    yield put({ type: SET_ORDERING, data: false });
}