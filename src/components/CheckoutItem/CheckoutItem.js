import React from 'react'
import './CheckoutItem.scss'
import { removeFromCart, decreaseQuantity, addToCart } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'

function CheckoutItem({ item, removeFromCart, decreaseQuantity, addToCart }) {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt={item.name} ></img>
            </div>
            <span className="name"> { item.name } </span>
            <span className="quantity">
                <div className="arrow" onClick={(e) => decreaseQuantity(item) } >&#10094;</div>
                <span className="value"> { item.quantity } </span> 
                <div className="arrow" onClick={(e) => addToCart(item)} >&#10095;</div>
            </span>
            <span className="price"> ${ item.price } </span>
            <div className="remove-button" onClick={() => {
                removeFromCart(item.id)
            }} >
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
    addToCart: (item) => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)