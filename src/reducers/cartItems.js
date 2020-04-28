import { SET_CART_ITEMS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => (
  action.type === SET_CART_ITEMS ? action.data : state
);
