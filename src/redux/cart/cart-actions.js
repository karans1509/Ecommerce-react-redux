import {CartActionTypes} from './cart-action-types'

export const toggleCartDropdown  = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addToCart = (item) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: item
})

export const removeFromCart = (id) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id
})

export const decreaseQuantity = (item) => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item
})