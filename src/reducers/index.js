import { combineReducers } from 'redux'

import peopleData from './peopleData'
import getInfoData from './getInfoData'
import cartItems from './addRemoveItem'
import makeOrder from './makeOrder'
import error from './error'
import isLoading from './setLoading'
import setOrderign from './setOrdering'



export default combineReducers({
  peopleData,
  getInfoData,
  cartItems,
  makeOrder,
  error,
  isLoading,
  setOrderign
})  


