import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import LoginView from '../Login/LoginView'
import AppBar from 'material-ui/AppBar'

import logo from '../logo.svg'
import './QueProApp.css'

class QueProApp extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="QuePro"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Route path={`${this.props.match.url}login`} component={LoginView} />
      </div>
    )
  }
}

export default QueProApp
