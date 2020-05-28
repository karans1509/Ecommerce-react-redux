
export const addItemToCart = (cartItems, item) => {

    const existingItem = cartItems.find((cartItem => cartItem.id === item.id));

    if (existingItem) {

        return cartItems.map(cartItem => (
            cartItem.id !== item.id ? 
            cartItem :
            {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }

        ))
    }
    else {
        return [
            ...cartItems,
            {
                ...item,
                quantity: 1
            }
        ]
    }
}

export const decreaseQuantity = (cartItems, item) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if(existingItem.quantity === 1) {

        return cartItems.filter(cartItem => cartItem.id !== item.id);
    }
    else {
        return cartItems.map(cartItem => {
            return cartItem.id === item.id ? 
            {
                ...cartItem,
                quantity: cartItem.quantity - 1
            }
            :
            cartItem
        })
    }
}