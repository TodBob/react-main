import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { connect } from "react-redux";
import { fetchInfoData, addToCart, removeFromCart } from "../actions";
import { Link } from "react-router-dom";

import Loading from './Loading'

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { getInfoData } from '../selectors/infoData'
import { getLoading } from '../selectors/loading'
import { getCartItems } from '../selectors/cartItems'




let ProductInfo = ({
  fetchInfoData,
  infoData,
  loading,
  cartItems,
  addToCart,
  removeFromCart
}) => {
  const { productId } = useParams();
  const isInCart = cartItems.find(e => e.created === infoData.created);
  const bull = <span className="bullet">•</span>;
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender
  } = infoData;

  useEffect(() => {
    fetchInfoData(productId);
  }, []);

  return (
    <div className="productInfo">
      {loading ?
        <Loading />
        : (
          <Card className="card" variant="outlined">
            <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body2" component="p">
                {bull} Height: {height}
              </Typography>
              <Typography variant="body2" component="p">
                {bull} Weight: {mass}
              </Typography>
              <Typography variant="body2" component="p">
                {bull} Color of hair: {hair_color}
              </Typography>
              <Typography variant="body2" component="p">
                {bull} Color of skin: {skin_color}
              </Typography>
              <Typography variant="body2" component="p">
                {bull} Color of eyes: {eye_color}
              </Typography>
              <Typography variant="body2" component="p">
                {bull} Gender: {gender}
              </Typography>
              <hr />
              <Typography variant="body2" component="p">
                Price: {height} €
            </Typography>
            </CardContent>

            <div className='footer'>
              <CardActions>
                <Link to="/">
                  <Button size="small">Back</Button>
                </Link>
              </CardActions>

              {isInCart ? (
                <RemoveShoppingCartIcon className='shopping_cart'
                  onClick={() => removeFromCart(infoData.created)}
                />
              ) : (
                  <AddShoppingCartIcon className='shopping_cart' onClick={() => addToCart(infoData)} />
                )}
            </div>


          </Card>
        )}


    </div>
  );
};

const mapStateToProps = state => ({
  infoData: getInfoData(state),
  loading: getLoading(state),
  cartItems: getCartItems(state)
});
const mapDispatchToProps = {
  fetchInfoData,
  addToCart,
  removeFromCart
};
ProductInfo = connect(mapStateToProps, mapDispatchToProps)(ProductInfo);

export default ProductInfo;