import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { withRouter } from 'react-router-dom'
import { toggleCartDropdown } from '../../redux/cart/cart-actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    
    console.log(cartItems);
    console.log(history);

    return (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                )) 
                :
                <span className="empty-message">Your cart is empty. </span>
            }
        </div>
        <CustomButton 
            onClick={() => { 
                history.push('/checkout');
                dispatch(toggleCartDropdown()); 
            }} 
        >
            Go To Checkout
        </CustomButton>
    </div>
)}

const mapStateToProps = (state) => ({

    cartItems: selectCartItems(state)
})



export default withRouter(connect(mapStateToProps)(CartDropdown));