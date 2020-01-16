import { IS_ERROR } from '../constants/actionTypes'

const initialState = false

export default (state = initialState, action) => (
    action.type === IS_ERROR ? action.data : state
)