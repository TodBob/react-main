const initialState = {loading: false}

export default function setLoading(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {
                loading: action.data
            };
        default:
            return state;
    }
}