import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import LoginView from '../Login/LoginView'
import MainView from  './MainView'
import LiveMonitor from '../LiveMonitor/LiveMonitor'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AppBar from 'material-ui/AppBar'
import logo from '../logo.svg'
import './QueProApp.css'


class QueProApp extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="QuePro"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div className="container">
          <ProtectedRoute path={`${this.props.match.url}`} component={MainView} />
          <Route path={`${this.props.match.url}login`} component={LoginView} />
          <ProtectedRoute path={`${this.props.match.url}live-monitor`} component={LiveMonitor} />
        </div>
      </div>

    )
  }
}

export default QueProApp
