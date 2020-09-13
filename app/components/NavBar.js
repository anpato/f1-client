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
import { ToggleModal } from '../store/actions'
const NavBar = ({ toggleModal, modalOpen }) => {
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
      <AppBarAction first onClick={() => toggleModal(true)}>
        <PersonSVGIcon />
      </AppBarAction>
    </AppBar>
  )
}
const mapStateToProps = ({ Dom }) => ({
  modalOpen: Dom.modalOpen
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (boolean) => dispatch(ToggleModal(boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
