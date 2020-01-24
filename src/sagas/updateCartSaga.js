import { put, select } from "redux-saga/effects";
import { getCartItems } from '../selectors/cartItems'
import { SET_CART_ITEMS } from '../constants/actionTypes'

import xorBy from 'lodash/fp/xorBy';

/* This is a best solution for remove and add items in cart, BUT
It didnt work as expected. After reload a page or check for more info which make new API call, will this Func. broke

I will still like to holde this here for feature*/

export function* updateCartSaga(action) {
    const cartItems = yield select(getCartItems)
    const newItem = action.data

    const updatedCartItems = xorBy(cartItems, [newItem], 'name')


    yield put({ type: SET_CART_ITEMS, data: updatedCartItems });
}