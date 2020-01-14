export default function makeOrder(state = {test: 'test'}, action) {
    switch(action.type) {
        case "MAKE_ORDER":
      return state; /* Return empty cart: [] */
    default:
      return state;
    }
}