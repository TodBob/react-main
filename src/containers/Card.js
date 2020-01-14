import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import { Link } from "react-router-dom";

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'

import { getCartItems } from '../selectors/cartItems'

let SingleCard = ({ data, cartItems, addToCart, removeFromCart }) => {
  const isInCart = cartItems.find(e => e.created === data.created)

  return (
    <Card>
      <CardHeader
        title={data.name}
        actAsExpander={false}
        showExpandableButton={false}
      />
      <CardText>
        {isInCart ? (
          <RemoveShoppingCartIcon className='shopping_cart'
            onClick={() => removeFromCart(data.created)}
          />
        ) : (
            <AddShoppingCartIcon className='shopping_cart' onClick={() => addToCart(data)} />
          )}
        <ul>
          <li>{`height: ${data.height}`}</li>
          <li>{`hair color: ${data.hair_color}`}</li>
          <li>{`gender: ${data.gender}`}</li>
        </ul>
        <hr />
        <div className='card_footer'>
          <span>{`Price: ${data.height} €`}</span>
          <Link to={`/product/${data.url.match(/\d+/g)}`}>More Info</Link>
        </div>
      </CardText>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state)
})

const mapDispatchToProps = {
  addToCart,
  removeFromCart
}

SingleCard = connect(mapStateToProps, mapDispatchToProps)(SingleCard)
export default SingleCard;

