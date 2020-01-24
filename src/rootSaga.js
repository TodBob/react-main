import { all } from 'redux-saga/effects';

import mainSagas from './sagas'


export default function* rootSaga() {
  yield all([
    ...mainSagas,
  ])
}