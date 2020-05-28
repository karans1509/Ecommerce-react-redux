import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/cart/cart-actions'

function CollectionItem({ item, addToCart }) {
    return (
        <div className="collection-item">
            <div className="image"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
            >

            </div>
            <div className="collection-footer">
                <span className='name'> {item.name} </span>
                <span className='price'> {item.price} </span>
            </div>
            <CustomButton onClick={(e) => addToCart(item)} inverted> Add To Cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);