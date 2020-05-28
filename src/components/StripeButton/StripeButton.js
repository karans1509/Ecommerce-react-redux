import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({ price }) {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_AYrkJvwWv0JCxkbbOAYs0shM";

    const onToken = (token) => {

        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton