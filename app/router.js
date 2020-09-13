import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamSelection from './pages/TeamSelection'
import ViewSetup from './pages/ViewSetup'
import NavBar from './components/NavBar'
import { Modal } from './shared'
import { connect } from 'react-redux'
import { ToggleModal } from './store/actions'
import LoginForn from './components/LoginForn'

const mapStateToProps = ({ Dom }) => ({
  modalOpen: Dom.modalOpen
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (boolean) => dispatch(ToggleModal(boolean))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ modalOpen, toggleModal }) => {
  return (
    <>
      <NavBar />
      <div style={{ height: '3.5rem' }}></div>
      <Modal modalOpen={modalOpen} toggleClose={() => toggleModal(false)}>
        <LoginForn />
      </Modal>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={TeamSelection} />
          <Route path="/setups" component={ViewSetup} />
        </Switch>
      </main>
    </>
  )
})
