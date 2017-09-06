import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import logo from '../logo.svg'
import './QueProApp.css'

class QueProApp extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="QuePro"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1>Hi friend</h1>
      </div>
    )
  }
}

export default QueProApp
