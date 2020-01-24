import { put, select } from "redux-saga/effects";
import { getCartItems } from '../selectors/cartItems'
import { SET_CART_ITEMS } from '../constants/actionTypes'



export function* addToCartSaga(action) {
    const cartItems = yield select(getCartItems)
    const newItem = action.data

    /* let updatedCartItems
    if(!cartItems.includes(newItem)) {
      updatedCartItems = [...cartItems, newItem]
    } else if (cartItems.includes(newItem)) {
     updatedCartItems = cartItems.filter( e => e.created !== newItem.created )
    } */

    //  let updatedCartItems = !cartItems.includes(newItem) ? [...cartItems, newItem] : cartItems.filter( e => e.created !== newItem.created )

    const updatedCartItems = [...cartItems, newItem]

    yield put({ type: SET_CART_ITEMS, data: updatedCartItems });
}