import React from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom'
import Login from '../Account/Login'
import Demo from '../Demo'
export default function Router() {
  return <HashRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/demo' component={Demo} />
    </Switch>
  </HashRouter>
}