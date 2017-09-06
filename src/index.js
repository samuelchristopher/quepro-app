import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css'
import QueProApp from './QueProApp/QueProApp'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <MuiThemeProvider>
    <QueProApp />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
