import React from 'react'
import './MenuItem.scss'
import { withRouter } from 'react-router-dom'

function MenuItem({ section, match, history }) {

    return (
        <div 
            className={`menu-item ${section.size}`}
            onClick={ () => {
                history.push(`${match.url}${section.linkUrl}`)
            }}
        >
            <div style={{ background: `url(${section.imageUrl})` }} className="background-image">
            </div>
            <div  className="content">
                <h1 className="title"> {section.title} </h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);