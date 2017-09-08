import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import firebase from 'firebase/app'
import 'firebase/database'

class Mock extends Component {
  constructor() {
    super()
    this.state = {
      mockData: {},
      userNumberInput: '',
      currentUserNumber: ''
    }

    this.incrementNumber = this.incrementNumber.bind(this)
    this.decrementNumber = this.decrementNumber.bind(this)
    this.updateTextField = this.updateTextField.bind(this)
    this.trackUserNumber = this.trackUserNumber.bind(this)
  }

  componentWillMount() {
    let refOne = firebase.database().ref('mockData')
    let refTwo = firebase.database().ref(`users/${this.props.user.uid}`)
    refOne.on('value', snap =>  this.setState({mockData: snap.val()})).bind(this)
    refTwo.on('value', snap => this.setState({ currentUserNumber: snap.val().number })).bind(this)
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

  render() {
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
      </div>
    )
  }
}

export default Mock
