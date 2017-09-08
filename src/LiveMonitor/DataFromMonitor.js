import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'

class DataFromMonitor extends Component {
  constructor() {
    super()
    this.state = {
      output: ''
    }
  }
  componentWillMount() {
    let ref = firebase.database().ref('testRawData')
    ref.on('value', snapshot => this.setState({ output: snapshot.val().outputText })).bind(this)
  }
  render() {
    return (
      <p>raw data from monitor: {this.state.output}</p>
    )
  }
}

export default DataFromMonitor
