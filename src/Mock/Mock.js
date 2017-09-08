import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/messaging'

class Mock extends Component {
  constructor() {
    super()
    this.state = {
      mockData: {},
      userNumberInput: '',
      currentUserNumber: '',
      currentUserMsgToken: '',
      showDialog: false
    }

    this.incrementNumber = this.incrementNumber.bind(this)
    this.decrementNumber = this.decrementNumber.bind(this)
    this.updateTextField = this.updateTextField.bind(this)
    this.trackUserNumber = this.trackUserNumber.bind(this)
    this.getMsgPermission = this.getMsgPermission.bind(this)
    this.hanldeClose = this.handleClose.bind(this)


    const messaging = firebase.messaging()
    messaging.onMessage(payload => {
      console.log(payload)
    })
  }

  componentWillMount() {
    let refOne = firebase.database().ref('mockData')
    let refTwo = firebase.database().ref(`users/${this.props.user.uid}`)
    refOne.on('value', snap =>  this.setState({mockData: snap.val()})).bind(this)
    refTwo.on('value', snap => this.setState({ currentUserNumber: snap.val().number, currentUserMsgToken: snap.val().messagingToken })).bind(this)
  }

  componentWillUpdate() {
    let numberDifference = parseInt(this.state.mockData.currentNumber) - parseInt(this.state.currentUserNumber)
    if (numberDifference === 5) {
      return this.setState({
        showDialog: true
      })
    }
  }

  getMsgPermission() {
    let messaging = firebase.messaging()
    messaging.requestPermission()
    .then(() => messaging.getToken())
    .then(token => {
      let userDataRef = firebase.database().ref(`users/${this.props.users.uid}`)
      return userDataRef.set({
        messagingToken: token
      })
    })
    .catch(err => console.log(err))
  }

  trackUserNumber() {
    let ref = firebase.database().ref(`users/${this.props.user.uid}`)
    ref.set({
      number: this.state.userNumberInput
    })
  }

  updateTextField(e, newValue) {
    return this.setState({
      userNumberInput: newValue
    })
  }

  incrementNumber() {
    let ref = firebase.database().ref('mockData')
    return ref.set({
      currentNumber: parseInt(this.state.mockData.currentNumber) + 1
    })
  }

  decrementNumber() {
    let ref = firebase.database().ref('mockData')
    return ref.set({
      currentNumber: parseInt(this.state.mockData.currentNumber) - 1
    })
  }

  handleClose() {
    this.setState({
      showDialog: false
    })
  }

  render() {
    const actions = [
      <FlatButton primary={true} label="Okay" onTouchTap={this.handleClose} />
    ]

    return (
      <div>
        <div>
          <p>Manipulate mock data</p>
          <p>Current number: {this.state.mockData.currentNumber}</p>
          <FlatButton onTouchTap={this.incrementNumber} secondary={true} label="Increment number" />
          <FlatButton secondary={true} onTouchTap={this.decrementNumber} label="Decrement number" />
        </div>
        <div>
          <p>Track user number</p>
          {this.state.currentUserNumber ? <p>Your number is {this.state.currentUserNumber}</p> : ''}
          {this.state.currentUserNumber ? <p>{parseInt(this.state.mockData.currentNumber) - parseInt(this.state.currentUserNumber)} numbers away</p> : ''}
          <TextField
            hintText="Enter your number"
            value={this.state.userNumberInput}
            type="number"
            onChange={this.updateTextField}
          />
          <FlatButton disabled={this.state.userNumberInput ? false : true} onTouchTap={this.trackUserNumber} primary={true} label="Track number" />
        </div>
        <div>
          <p>Messaging</p>
          <RaisedButton onTouchTap={this.getMsgPermission} secondary={true} label="Get permission"/>
          <RaisedButton disabled={this.currentUserMsgToken ? false : true} secondary={true} label="Send me a notification"/>
          <Dialog
            title="Your number is close!"
            actions={actions}
            modal={false}
            open={this.state.showDialog}
            onRequestClose={this.handleClose}
          >
            Your number is coming up.
          </Dialog>
        </div>
      </div>
    )
  }
}

export default Mock
