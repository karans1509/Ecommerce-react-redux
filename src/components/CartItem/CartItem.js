import React from 'react'
import './CartItem.scss'

function CartItem({ cartItem }) {
    
    return (
        <div className="cart-item">
            <img src={ cartItem.imageUrl } alt={cartItem.name} />
            <div className="item-details">
                <span className="name"> { cartItem.name } </span>
                <span className="name"> { cartItem.quantity + " X $" + cartItem.price } </span>
            </div>
        </div>
    )
}

export default CartItem;