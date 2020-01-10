import React from 'react';
import { connect } from 'react-redux'

import { Link } from "react-router-dom";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';


let NavBar = ({cartItems}) => {
  const isSomethingInCart = cartItems.length > 0 

  return (
   <div id='NavBar'>
      <Link to="/"><HomeIcon/></Link>
      <Link to="/cart">{ isSomethingInCart ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}</Link>
   </div>
  )
};

const mapStateToProps = (state) => ({
  cartItems: state.cart
})

NavBar = connect(mapStateToProps, null)(NavBar)
export default NavBar;