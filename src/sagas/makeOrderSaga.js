import { put, delay } from 'redux-saga/effects'
import { SET_CART_ITEMS } from '../constants/actionTypes'

import { SET_ORDERING } from '../constants/actionTypes'

export function* makeOrderSaga() {
  yield put({ type: SET_ORDERING, data: true })
  yield delay(3000)
  yield put({ type: SET_CART_ITEMS, data: [] })
  yield put({ type: SET_ORDERING, data: false })
}
