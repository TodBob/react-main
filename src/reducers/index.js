const reducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, loading: true };
        case 'DATA_RECEIVED':
            const storage = JSON.parse(localStorage.getItem("cart"));
            return { ...state, data: action.data, loading: false , cart: storage ? storage : []}
        case 'ADD_TO_CART':
            localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]))
            return { ...state, cart: [...state.cart, action.payload] }
        case 'REMOVE_FROM_CART':
            const newArr = state.cart.filter(val => val.created !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newArr));
            return { ...state, cart: newArr }
        case 'MAKE_ORDER':
            return { ...state, isOrdering: true}
        case 'MAKE_ORDER_ASYNC':
            localStorage.clear()
            return { ...state, cart: [], isOrdering: false }
        default:
            return state;
    }
};
export default reducer;

/* JSON.parse(localStorage.getItem("names")); */