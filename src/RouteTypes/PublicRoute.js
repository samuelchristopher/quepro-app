import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Route, Redirect } from 'react-router-dom'


class PublicRoute extends Component {
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
    if(!this.state.isAuthenticated) {
      componentToRender = <Component {...rest} />
    } else {
      componentToRender = <Redirect to={{pathname: '/'}} />
    }
    return  (
      <Route {...rest} render={props => (
        componentToRender
      )}/>
    )
  }
}


export default PublicRoute
