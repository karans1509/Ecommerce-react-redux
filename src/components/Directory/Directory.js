import React, { Component } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'
import { connect } from 'react-redux'
import { selectSections } from '../../redux/directory/directory-selector'
import { createStructuredSelector } from 'reselect'

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {
        sections.map(menu => (
          <MenuItem key={menu.id} section={menu} />
        ))
      }
    </div>
  )
}

const mapStateToProps =  createStructuredSelector({
  sections: selectSections
})


export default connect(mapStateToProps)(Directory)
