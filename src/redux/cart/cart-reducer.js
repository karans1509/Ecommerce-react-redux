import { CartActionTypes } from './cart-action-types'
import { addItemToCart, decreaseQuantity } from './cart-utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }

        case CartActionTypes.DECREASE_QUANTITY:

            return {
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            }

        default:
            return state
    }
}

export default cartReducer;