import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const UserRoute = ({ user, isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => isAuthenticated ? <Component user={user} {...props} /> : <Redirect to="/login" />} />
)

export default UserRoute
