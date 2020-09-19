import React from 'react'
import {
  AppBar,
  AppBarTitle,
  AppBarAction,
  PersonSVGIcon,
  PeopleSVGIcon,
  DashboardSVGIcon,
  SaveSVGIcon,
  Tooltipped
} from 'react-md'
import F1Logo from '../assets/F1.svg'
import { connect } from 'react-redux'
import { ToggleModal } from '../store/actions'
import { Link as RRLink, useHistory } from 'react-router-dom'
const NavBar = ({ toggleModal, authenticated }) => {
  const history = useHistory()
  const AuthOptions = [
    <Tooltipped
      key={0}
      id="dash-tt"
      position="below"
      tooltip="Your Dashboard"
      hoverDelay={0}
    >
      <AppBarAction id="profile" first>
        <DashboardSVGIcon />
      </AppBarAction>
    </Tooltipped>,
    <Tooltipped
      key={1}
      id="favorites-tt"
      position="below"
      tooltip="Your Favorites"
      hoverDelay={0}
    >
      <AppBarAction id="favorites">
        <SaveSVGIcon />
      </AppBarAction>
    </Tooltipped>,
    <Tooltipped
      id="logout-tt"
      tooltip="Logout"
      position="below"
      hoverDelay={0}
      key={2}
    >
      <AppBarAction id="edit-profile" last onClick={() => toggleModal(true)}>
        <PeopleSVGIcon />
      </AppBarAction>
    </Tooltipped>
  ]
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
      {authenticated ? (
        AuthOptions.map((C, i) => C)
      ) : (
        <AppBarAction first onClick={() => toggleModal(true)}>
          <PersonSVGIcon />
        </AppBarAction>
      )}
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
