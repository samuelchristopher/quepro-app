import React, { Component } from 'react'
import LoginView from '../Login/LoginView'
import MainView from  './MainView'
import LiveMonitor from '../LiveMonitor/LiveMonitor'
import UserRoute from  '../RouteTypes/UserRoute'
import GuestRoute from  '../RouteTypes/GuestRoute'
import AppBar from 'material-ui/AppBar'
import firebase from 'firebase/app'
import 'firebase/auth'
import './QueProApp.css'


class QueProApp extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return this.setState({
          isAuthenticated: true,
          user
        })
      }
      return this.setState({
        isAuthenticated: false
      })
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title="QuePro"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div className="container">
          <UserRoute user={this.state.user} isAuthenticated={this.state.isAuthenticated} path={`${this.props.match.url}`} exact component={MainView} />
          <UserRoute user={this.state.user} isAuthenticated={this.state.isAuthenticated} path={`${this.props.match.url}another`} exact component={LiveMonitor} />
          <GuestRoute isAuthenticated={this.state.isAuthenticated} path={`${this.props.match.url}login`} exact component={LoginView} />
        </div>
      </div>

    )
  }
}

export default QueProApp
