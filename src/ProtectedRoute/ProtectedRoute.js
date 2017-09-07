import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Route, Redirect } from 'react-router-dom'

let isAuthenticated = false
if (firebase.apps.length) {
  firebase.auth().onAuthStateChanged(user => {
    isAuthenticated = (user) ? true : false
  })
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}
  />
)

export default ProtectedRoute
