import React from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../actions'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

let CartItem = ({ item, updateCart }) => {

    return (
        <div className='cartItem'>
            <div className='nameDiv'>
                <DeleteForeverIcon className='deleteIcon' onClick={() => updateCart(item)} />
                <span>{item.name}</span>
            </div>

            <br />
            <span>{item.height} €</span>
        </div>
    )
}

const mapDispatchToProps = {
    updateCart
}

CartItem = connect(null, mapDispatchToProps)(CartItem)
export default CartItem