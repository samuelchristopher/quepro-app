import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QueProApp from './QueProApp/QueProApp'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Router>
        <Route path="/" component={QueProApp} />
      </Router>
    </div>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
