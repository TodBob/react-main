import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchInfoData, updateCart } from '../actions';
import Loading from './Loading';

import { getInfoData } from '../selectors/infoData';
import { getLoading } from '../selectors/loading';
import { getCartItems } from '../selectors/cartItems';

const ProductInfo = ({
  fetchInfoData: fetchInfoDataList,
  infoData,
  loading,
  cartItems,
  updateCart: updateCartItems,
}) => {
  const { productId } = useParams();
  const isInCart = cartItems.find((e) => e.created === infoData.created);
  const bull = <span className="bullet">•</span>;
  const {
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    eye_color: eyeColor,
    gender,
  } = infoData;

  useEffect(() => {
    fetchInfoDataList(productId);
  }, []);

  return (
    <div className="productInfo">
      {loading ? (
        <Loading />
      ) : (
        <Card className="card" variant="outlined">
          <CardContent>
            <Typography className="title" color="textSecondary" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              {bull}
              {' '}
              Height:
              {height}
            </Typography>
            <Typography variant="body2" component="p">
              {bull}
              {' '}
              Weight:
              {mass}
            </Typography>
            <Typography variant="body2" component="p">
              {bull}
              {' '}
              Color of hair:
              {hairColor}
            </Typography>
            <Typography variant="body2" component="p">
              {bull}
              {' '}
              Color of skin:
              {skinColor}
            </Typography>
            <Typography variant="body2" component="p">
              {bull}
              {' '}
              Color of eyes:
              {eyeColor}
            </Typography>
            <Typography variant="body2" component="p">
              {bull}
              {' '}
              Gender:
              {gender}
            </Typography>
            <hr />
            <Typography variant="body2" component="p">
              Price:
              {' '}
              {height}
              {' '}
              €
            </Typography>
          </CardContent>

          <div className="footer">
            <CardActions>
              <Link to="/">
                <Button size="small">Back</Button>
              </Link>
            </CardActions>

            <div onClick={() => updateCartItems(infoData)}>
              {isInCart ? (
                <RemoveShoppingCartIcon className="shopping_cart" />
              ) : (
                <AddShoppingCartIcon className="shopping_cart" />
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

ProductInfo.propTypes = {
  fetchInfoData: PropTypes.func,
  infoData: PropTypes.object,
  loading: PropTypes.bool,
  cartItems: PropTypes.object,
  updateCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  infoData: getInfoData(state),
  loading: getLoading(state),
  cartItems: getCartItems(state),
});
const mapDispatchToProps = {
  fetchInfoData,
  updateCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
