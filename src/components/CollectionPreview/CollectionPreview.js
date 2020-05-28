import React from 'react'
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

export default function CollectionPreview({ title, routeName, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
}
