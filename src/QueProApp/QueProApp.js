import React, { Component } from 'react'
import LoginView from '../Login/LoginView'
import MainView from  './MainView'
import LiveMonitor from '../LiveMonitor/LiveMonitor'
import UserRoute from  '../RouteTypes/UserRoute'
import GuestRoute from  '../RouteTypes/GuestRoute'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import firebase from 'firebase/app'
import 'firebase/auth'
import './QueProApp.css'


class QueProApp extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
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

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title="QuePro"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={this.state.isAuthenticated}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <MenuItem onTouchTap={this.handleClose}>Login</MenuItem>
        </Drawer>
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
