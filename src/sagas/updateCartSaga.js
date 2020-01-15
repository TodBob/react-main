import { put, select } from "redux-saga/effects";
import { getCartItems } from '../selectors/cartItems'
import {SET_CART_ITEMS} from '../constants/actionTypes'

import xorBy from 'lodash/fp/xorBy';


export function* updateCartSaga(action) {
    const cartItems = yield select(getCartItems)
    const newItem = action.data
    
    const updatedCartItems = xorBy(cartItems, [newItem], 'created')

    yield put({ type: SET_CART_ITEMS, data: updatedCartItems });
}