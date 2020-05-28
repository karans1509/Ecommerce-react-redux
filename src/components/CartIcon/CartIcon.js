import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartDropdown } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

class CartIcon extends React.Component {

    handleClick = (e) => {
        e.preventDefault();

        const { toggleCartDropdown } = this.props;
        toggleCartDropdown();
    }

    render() {
        return (
            <div className="cart-icon">
                <ShoppingIcon className="shopping-icon" onClick={this.handleClick} />
                <span className="item-count"> {this.props.itemCount} </span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        toggleCartDropdown: () => dispatch(toggleCartDropdown())
    }
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);