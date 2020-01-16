import { SET_LOADING, DATA_RECEIVED, SET_ERROR } from '../constants/actionTypes'

import { put } from "redux-saga/effects";
import { baseApi } from '../API'

export function* fetchPeopleDataSaga() {
    yield put({ type: SET_LOADING, data: true });

    try {
        const resp = yield fetch(`${baseApi}people/`)
        const respData = yield resp.json()
        yield put({ type: DATA_RECEIVED, data: respData.results });
    } catch (error) {
        yield put({ type: SET_LOADING, data: false });
        yield put({ type: SET_ERROR, data: true });
    }
    yield put({ type: SET_LOADING, data: false });
}