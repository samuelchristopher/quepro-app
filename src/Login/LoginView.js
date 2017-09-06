import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class LoginView extends Component {
  constructor() {
    super()
    this.handleTap = this.handleTap.bind(this)
  }

  handleTap() {
    console.log('signing in with google')
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <RaisedButton onTouchTap={this.handleTap} secondary={true} label="Sign In With Google" />
      </div>
    )
  }
}

export default LoginView
