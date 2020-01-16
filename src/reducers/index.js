import { combineReducers } from 'redux'

import peopleData from './peopleData'
import infoData from './getInfoData'
import cartItems from './cartItems'
import error from './error'
import isLoading from './setLoading'
import isOrdering from './setOrdering'



export default combineReducers({
  peopleData,
  infoData,
  cartItems,
  error,
  isLoading,
  isOrdering
})


