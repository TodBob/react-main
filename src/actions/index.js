

export const getData = () => ({
         type: "GET_DATA"
       });

export const getDataInfo = payload => ({
  type: "GET_DATA_INFO",
  payload
});

export const addToCart = payload => ({
    type: 'ADD_TO_CART',
    payload
})

export const removeFromCart = payload => ({
    type: 'REMOVE_FROM_CART',
    payload
})

export const makeOrder = () => ({
    type: 'MAKE_ORDER'
})