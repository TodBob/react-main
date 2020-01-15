import {SET_CART_ITEMS} from '../constants/actionTypes'

const intialState = []

export default (state = intialState, action) => (
    action.type === SET_CART_ITEMS ? action.data : state
)




/* export default function addRemoveItem(state = intialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return  [...state, action.data]
        case "REMOVE_FROM_CART":
            const newArr = state.filter(val => val.created !== action.data);
            return newArr
        default:
            return state;
    }
} */