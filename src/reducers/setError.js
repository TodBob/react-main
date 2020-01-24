import { SET_ERROR } from '../constants/actionTypes'

const initialState = false

export default (state = initialState, action) => (
    action.type === SET_ERROR ? action.data : state
)