import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { updateCart } from '../actions';


const CartItem = ({ item, updateCart: updateCartItems }) => (
  <div className="cartItem">
    <div className="nameDiv">
      <DeleteForeverIcon
        className="deleteIcon"
        onClick={() => updateCartItems(item)}
      />
      <span>{item.name}</span>
    </div>

    <br />
    <span>
      {item.height}
      {' '}
      €
    </span>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.object,
  updateCart: PropTypes.func,
};

const mapDispatchToProps = {
  updateCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
