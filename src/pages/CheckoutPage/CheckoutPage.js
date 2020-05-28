import React from 'react';
import './CheckoutPage.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectTotal } from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"
import StripeCheckoutButton from '../../components/StripeButton/StripeButton'

function CheckoutPage({ cartItems, total }) {
    
    console.log(cartItems);
    console.log(total);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item}></CheckoutItem>
                ))
            }
            <div className="total" >
                <span>Total: ${total} </span>
            </div>

            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

export default connect(mapStateToProps)(CheckoutPage);