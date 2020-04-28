import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';

import { getCartItems } from '../selectors/cartItems';

const NavBar = ({ cartItems }) => {
  const isSomethingInCart = cartItems.length > 0;

  return (
    <div id="NavBar">
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/cart">
        {isSomethingInCart ? (
          <ShoppingCartIcon />
        ) : (
          <ShoppingCartOutlinedIcon />
        )}
      </Link>
    </div>
  );
};

NavBar.propTypes = {
  cartItems: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
});


export default connect(mapStateToProps, null)(NavBar);
