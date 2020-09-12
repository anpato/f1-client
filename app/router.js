import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamSelection from './pages/TeamSelection'

export default () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/teams" component={TeamSelection} />
      </Switch>
    </main>
  )
}
