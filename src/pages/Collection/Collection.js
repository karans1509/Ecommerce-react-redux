import React from 'react'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import './Collection.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selector'

function Collection({ match, collection }) {

    return (

        collection ?
        <div className="collection-page">
            <h2 className="title"> {collection.title} </h2>
            <div className="items">
                {
                    collection.items.map(item => (
                        <CollectionItem key={item.id} item={item}  />
                    ))
                }
            </div>
        </div>
        :
        null
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)