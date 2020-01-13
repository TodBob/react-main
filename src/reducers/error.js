const initialState = {error: false}

export default function error(state = initialState, action) {
    switch (action.type) {
        case "IS_ERROR":
            return {
                error: action.data
            };
        default:
            return state;
    }
}