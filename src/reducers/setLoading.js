import { SET_LOADING } from '../constants/actionTypes'

const initialState = false

export default (state = initialState, action) => (
    action.type === SET_LOADING ? action.data : state
)
