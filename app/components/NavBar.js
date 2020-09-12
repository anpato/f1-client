import React from 'react'
import {
  AppBar,
  AppBarTitle,
  AppBarNav,
  AppBarAction,
  PersonSVGIcon
} from 'react-md'
import F1Logo from '../assets/F1.svg'
import { connect } from 'react-redux'
const NavBar = () => {
  return (
    <AppBar theme="primary" fixed>
      <AppBarTitle style={{ width: 'auto' }}>
        <div style={{ width: '5rem' }}>
          <img
            src={F1Logo}
            alt="f1 logo"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </AppBarTitle>
      <AppBarAction first>
        <PersonSVGIcon />
      </AppBarAction>
    </AppBar>
  )
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
