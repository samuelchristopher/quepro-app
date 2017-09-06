import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const LiveMonitor = ({ ...rest }) => (
  <Route {...rest} render={props => (
    (props.isAuthenticated) ? (<h1>welcome</h1>) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {from: '/'}
        }}
      />
    )
  )}/>
)

export default LiveMonitor
