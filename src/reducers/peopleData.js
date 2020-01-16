import { DATA_RECEIVED } from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => (
    action.type === DATA_RECEIVED ? action.data : state
)

