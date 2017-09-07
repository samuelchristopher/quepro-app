import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainView extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Homes!</h1>
        <Link to="/another">another</Link>
      </div>
    )
  }
}

export default MainView
