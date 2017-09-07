import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import firebase from 'firebase/app'
import 'firebase/auth'

class LoginView extends Component {
  constructor() {
    super()
    this.handleTap = this.handleTap.bind(this)
  }

  handleTap() {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(user => {
      console.log('sign in success', user)
      this.props.history.go('/')
    })
    .catch(err => {
      console.log(err)
    })
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
