import { put, select } from 'redux-saga/effects';
import xorBy from 'lodash/xorBy';
import { getCartItems } from '../selectors/cartItems';
import { SET_CART_ITEMS } from '../constants/actionTypes';

// import xorBy from 'lodash/fp/xorBy';
// xorBy from /fp/ repository dint work on 100%.

export function* updateCartSaga(action) {
  const cartItems = yield select(getCartItems);
  const newItem = action.data;

  const updatedCartItems = xorBy(cartItems, [newItem], 'name');

  yield put({ type: SET_CART_ITEMS, data: updatedCartItems });
}
