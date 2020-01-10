import { put, takeLatest, all } from "redux-saga/effects";
import { baseApi } from '../API/api'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

/*  */
function* fetchPeopleData() {
    const json =
        yield fetch(`${baseApi}people/`)
            .then(response => response.json());
    yield put({ type: "DATA_RECEIVED", data: json.results });
}

function* actionWatcher() {
    yield takeLatest("GET_DATA", fetchPeopleData);
}

/* Fake ASYNC CALL FOR ORDERING */

function* makeOrderAsync() {
    yield delay(3000)
    yield put({type: "MAKE_ORDER_ASYNC"})
}


function* watchMakeOrderAsync() {
    yield takeLatest('MAKE_ORDER', makeOrderAsync)
  }


export default function* rootSaga() {
    yield all([actionWatcher(), watchMakeOrderAsync()]);
}