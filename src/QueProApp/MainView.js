import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataFromMonitor from '../LiveMonitor/DataFromMonitor'

class MainView extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.user.displayName}!</h1>
        <Link to="/another">another</Link>
        <DataFromMonitor />
      </div>
    )
  }
}

export default MainView
