const initialState =  []

export default function peopleData(state = initialState, action) {
    switch (action.type) {
        case "DATA_RECEIVED":
            /* const storage = JSON.parse(localStorage.getItem("cart")); */
            return {
                data: action.data,
                /* cartItems: storage ? storage : [] */
            };
        default:
            return state;
    }
}