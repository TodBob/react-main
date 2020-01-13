const initialState = {ordering: false}

export default function setOrdering(state = initialState, action) {
    switch (action.type) {
        case "SET_ORDERING":
            return {
                ordering: action.data
            };
        default:
            return state;
    }
}