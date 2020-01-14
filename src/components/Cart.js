import React from 'react';
import { connect } from 'react-redux'


import Button from '@material-ui/core/Button';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import CartItem from '../containers/CartItem'

import { makeOrder } from '../actions'

import { getCartItems } from '../selectors/cartItems'
import { getOrdering } from "../selectors/isOrdering";


let Cart = ({ cart, makeOrder, isOrdering }) => {


    let getSumm = cart.map(e => parseInt(e.height))
    let summ = getSumm.reduce((a, b) => a + b, 0)
    const summToLocale = summ.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    return (
      <div id="Cart">
        {cart.length > 0 ? (
          <ul>
            {cart.map(e => {
              getSumm += e.height;
              return <CartItem key={e.created} item={e} />;
            })}
          </ul>
        ) : (
          <h1> Cart is empty </h1>
        )}
        <p>Price total: {summToLocale}</p>
        {console.log("Ordering?? ", isOrdering)}
        {cart.length > 0 ? (
          <Button
            variant="contained"
            color="default"
            startIcon={<ShoppingBasketOutlinedIcon />}
            onClick={makeOrder}
          >
            {isOrdering ? "Ordering..." : "Order"}
          </Button>
        ) : null}
      </div>
    );
}

const mapStateToProps = state => ({
  cart: getCartItems(state),
  isOrdering: getOrdering(state)
});

const mapDispatchToProps = {
    makeOrder
}


Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default Cart;