const intialState = []

export default function addRemoveItem(state = intialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            /* localStorage.setItem(
                "cart",
                JSON.stringify([...state.cart, action.data])
            ); */
            return  [...state, action.data]
        case "REMOVE_FROM_CART":
            const newArr = state.filter(val => val.created !== action.data);
            /* localStorage.setItem("cart", JSON.stringify(newArr)); */
            return newArr
        default:
            return state;
    }
}