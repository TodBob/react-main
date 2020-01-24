import { put, select } from "redux-saga/effects";
import { getCartItems } from '../selectors/cartItems'
import { SET_CART_ITEMS } from '../constants/actionTypes'



export function* removeFromCartSaga(action) {
    const cartItems = yield select(getCartItems)
    const newItem = action.data

    const updatedCartItems = cartItems.filter( e => e.created !== newItem.created )

    yield put({ type: SET_CART_ITEMS, data: updatedCartItems });
}