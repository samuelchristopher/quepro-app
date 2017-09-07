import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Route, Redirect } from 'react-router-dom'

// let isAuthenticated = false
// if (firebase.apps.length) {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       isAuthenticated = true
//     } else {
//       isAuthenticated = false
//     }
//   })
// }

class ProtectedRoute extends Component {
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
          isAuthenticated: true
        })
      } else {
        return this.setState({
          isAuthenticated: false
        })
      }
    })
  }

  render() {
    let { component: Component, ...rest } = this.props
    let componentToRender
    if(this.state.isAuthenticated) {
      componentToRender = <Component {...rest} />
    } else {
      componentToRender = <Redirect to={{pathname: '/login'}} />
    }
    return  (
      <Route {...rest} render={props => (
        componentToRender
      )}/>
    )
  }
}

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//
// )

export default ProtectedRoute
