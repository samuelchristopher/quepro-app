import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import LoginView from '../Login/LoginView'
import LiveMonitor from '../LiveMonitor/LiveMonitor'
import AppBar from 'material-ui/AppBar'
import firebase from 'firebase'
import logo from '../logo.svg'
import './QueProApp.css'

class QueProApp extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  componentWillMount() {
    let config = {
      apiKey: "AIzaSyAIbdEm_m3IjYRm7zPYqkMFGY6CTKpegaY",
      authDomain: "quepro-app.firebaseapp.com",
      databaseURL: "https://quepro-app.firebaseio.com",
      projectId: "quepro-app",
      storageBucket: "quepro-app.appspot.com",
      messagingSenderId: "1013803883791"
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          user
        })
      } else {
        this.setState({
          isAuthenticated: false
        })
      }
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
          <Route path={`${this.props.match.url}login`} component={LoginView} />
          <Route path={`${this.props.match.url}live-monitor`} isAuthenticated={this.state.isAuthenticated} component={LiveMonitor} />
        </div>
      </div>

    )
  }
}

export default QueProApp
