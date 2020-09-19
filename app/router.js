import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamSelection from './pages/TeamSelection'
import ViewSetup from './pages/ViewSetup'
import NavBar from './components/NavBar'
import { AuthRoute, Modal } from './shared'
import { connect } from 'react-redux'
import { ToggleModal } from './store/actions'
import LoginForn from './components/LoginForn'
import Profile from './pages/Profile'
import { Button, DialogContent, DialogFooter } from 'react-md'
import CreatorDashboard from './pages/CreatorDashboard'

const mapStateToProps = ({ Dom, Auth }) => ({
  modalOpen: Dom.modalOpen,
  isAuthenticated: Auth.authenticated
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (boolean) => dispatch(ToggleModal(boolean))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ modalOpen, toggleModal, isAuthenticated }) => {
  return (
    <>
      <NavBar authenticated={isAuthenticated} />
      <div style={{ height: '3.5rem' }}></div>
      <Modal modalOpen={modalOpen} toggleClose={() => toggleModal(false)}>
        {isAuthenticated ? (
          <>
            <DialogContent>Are you sure you want to log out?</DialogContent>
            <DialogFooter
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Button theme="primary" themeType="outline">
                Log Out
              </Button>
              <Button themeType="outline" onClick={() => toggleModal(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </>
        ) : (
          <LoginForn />
        )}
      </Modal>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={TeamSelection} />
          <Route path="/setups" component={ViewSetup} />
          <AuthRoute
            exact
            path="/profile"
            render={(props) => <Home {...props} />}
          />
          <AuthRoute
            path="/auth/profile"
            render={(props) => <Profile {...props} />}
          />
          <AuthRoute
            path="/profile/cms"
            render={(props) => <CreatorDashboard {...props} />}
          />
        </Switch>
      </main>
    </>
  )
})
