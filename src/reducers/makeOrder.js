export default function makeOrder(state = {isOrdering: false}, action) {
    switch(action.type) {
        case "MAKE_ORDER":
      return { ...state, isOrdering: true };
    case "MAKE_ORDER_ASYNC":
      localStorage.clear();
      return { ...state, cart: [], isOrdering: false };
    default:
      return state;
    }
}