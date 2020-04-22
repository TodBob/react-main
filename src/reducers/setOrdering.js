import { SET_ORDERING } from '../constants/actionTypes'

const initialState = false

export default (state = initialState, action) =>
  action.type === SET_ORDERING ? action.data : state
