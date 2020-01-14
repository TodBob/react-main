import { put } from "redux-saga/effects";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* makeOrderSaga() {
    yield put({ type: "SET_ORDERING", data: true });
    yield delay(3000)
    yield put({ type: "SET_ORDERING", data: false });
    yield put({type: "MAKE_ORDER"})
}