import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import CartItem from '../containers/CartItem';

import { makeOrder } from '../actions';

import { getCartItems } from '../selectors/cartItems';
import { getOrdering } from '../selectors/isOrdering';

const Cart = ({ cart, makeOrder: setOrder, isOrdering }) => {
  const isCartEmpty = cart.length > 0;

  let getSumm = cart.map((e) => parseInt(e.height, 10));
  const summ = getSumm.reduce((a, b) => a + b, 0);
  const summToLocale = summ.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div id="Cart">
      {isCartEmpty ? (
        <ul>
          {cart.map((e) => {
            getSumm += e.height;
            return <CartItem key={e.created} item={e} />;
          })}
        </ul>
      ) : (
        <h1> Cart is empty </h1>
      )}
      <p>
        Price total:
        {summToLocale}
      </p>

      {isCartEmpty ? (
        <Button
          variant="contained"
          color="default"
          startIcon={<ShoppingBasketOutlinedIcon />}
          onClick={setOrder}
        >
          {isOrdering ? 'Ordering...' : 'Order'}
        </Button>
      ) : null}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  makeOrder: PropTypes.func,
  isOrdering: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  cart: getCartItems(state),
  isOrdering: getOrdering(state),
});

const mapDispatchToProps = {
  makeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
