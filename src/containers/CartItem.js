import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

let CartItem = ({ item, removeFromCart }) => {

    return (
        <div className='cartItem'>
            <div className='nameDiv'>
                <DeleteForeverIcon className='deleteIcon' onClick={() => removeFromCart(item)} />
                <span>{item.name}</span>
            </div>

            <br />
            <span>{item.height} €</span>
        </div>
    )
}

const mapDispatchToProps = {
    removeFromCart
}

CartItem = connect(null, mapDispatchToProps)(CartItem)
export default CartItem