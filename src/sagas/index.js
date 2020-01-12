import { put, takeLatest, all, actionChannel } from "redux-saga/effects";
import { baseApi } from '../API/api'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

/* Initial Fetch call */
function* fetchPeopleData() {
    const json =
        yield fetch(`${baseApi}people/`)
            .then(response => response.json());
    yield put({ type: "DATA_RECEIVED", data: json.results });
}

function* watchFetchPeopleData() {
  yield takeLatest("GET_DATA", fetchPeopleData);
}

/* Fetch for product info */

function* fetchProductInfo(productId) {
    console.log("This is ID ", productId.payload);
  
    const json = 
        yield fetch(`${baseApi}people/${productId.payload}`)
        .then(response => response.json());
    yield put({ type: "DATA_RECEIVED_INFO", infoData: json });
}

function* fetchProductInfoAsync() {
  yield takeLatest("GET_DATA_INFO", fetchProductInfo);
}

/* Fake ASYNC CALL FOR ORDERING */

function* makeOrderAsync() {
    yield delay(3000)
    yield put({type: "MAKE_ORDER_ASYNC"})
}


function* watchMakeOrderAsync() {
    yield takeLatest('MAKE_ORDER', makeOrderAsync)
  }


/* Exporting Sagas */  
export default function* rootSaga() {
    yield all([watchFetchPeopleData(), watchMakeOrderAsync(), fetchProductInfoAsync()]);
}