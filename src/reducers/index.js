import { combineReducers } from 'redux'

import getData from './peopleData'
import getInfoData from './getInfoData'
import addRemoveItem from './addRemoveItem'
import makeOrder from './makeOrder'


const reducer = (state = { cart: [], infoData: {} }, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, loading: true };
    case "DATA_RECEIVED":
      const storage = JSON.parse(localStorage.getItem("cart"));
      return {
        ...state,
        data: action.data,
        loading: false,
        cart: storage ? storage : []
      };



    case "GET_DATA_INFO":
      return { ...state, loading: true };
    case "DATA_RECEIVED_INFO":
      return {
        ...state,
        infoData: action.infoData,
        loading: false
      };




    case "ADD_TO_CART":
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, action.payload])
      );
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const newArr = state.cart.filter(val => val.created !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newArr));
      return { ...state, cart: newArr };
    

    
      case "MAKE_ORDER":
      return { ...state, isOrdering: true };
    case "MAKE_ORDER_ASYNC":
      localStorage.clear();
      return { ...state, cart: [], isOrdering: false };
      



    default:
      return state;
  }
};
export default reducer;


/*  export default combineReducers({
  getData,
  getInfoData,
  addRemoveItem,
  makeOrder
})  */