import { put, select } from "redux-saga/effects";
import { getCartItems } from '../selectors/cartItems'
import { SET_CART_ITEMS } from '../constants/actionTypes'

import xorBy from 'lodash/fp/xorBy';
import includes from 'lodash/includes';

export function* updateCartSaga(action) {
    const cartItems = yield select(getCartItems)
    const newItem = action.data


    const updatedCartItems = xorBy(cartItems, [newItem], 'created') 

    /* console.log(updatedCartItems) */

     /* let updatedCartItems; */
    /* let updatedCartItems = cartItems.filter( e => e.created !== newItem.created ) */
    /* console.log(cartItems)
    console.log(includes(cartItems,newItem))
    if(includes(cartItems,newItem)) {
        updatedCartItems = cartItems.filter( e => e.created !== newItem.created )
    } else if (!includes(cartItems,newItem)) {
       */  /* updatedCartItems = [...cartItems, newItem] 
       }*/
    
     

    yield put({ type: SET_CART_ITEMS, data: updatedCartItems});
}