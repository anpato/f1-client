import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamSelection from './pages/TeamSelection'
import ViewSetup from './pages/ViewSetup'
import NavBar from './components/NavBar'

export default () => {
  return (
    <>
      <NavBar />
      <div style={{ height: '3.5rem' }}></div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={TeamSelection} />
          <Route path="/setups" component={ViewSetup} />
        </Switch>
      </main>
    </>
  )
}
