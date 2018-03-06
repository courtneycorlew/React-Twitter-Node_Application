import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstPage from './FirstPage'
import NoMatch from '../components/NoMatch'

export default class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
