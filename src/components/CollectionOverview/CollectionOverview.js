import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import './CollectionOverview.scss'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import { selectShopCollectionArray } from '../../redux/shop/shop-selector'

 function CollectionOverview({ collections }) {

    return (
        <div className="collections-overview"> 
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
        </div>
    )
}
 
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionArray
})

export default connect(mapStateToProps)(CollectionOverview);