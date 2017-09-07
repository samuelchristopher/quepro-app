import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QueProApp from './QueProApp/QueProApp'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase/app'
import './index.css'

injectTapEventPlugin()
let config = {
  apiKey: "AIzaSyAIbdEm_m3IjYRm7zPYqkMFGY6CTKpegaY",
  authDomain: "quepro-app.firebaseapp.com",
  databaseURL: "https://quepro-app.firebaseio.com",
  projectId: "quepro-app",
  storageBucket: "quepro-app.appspot.com",
  messagingSenderId: "1013803883791"
}
firebase.initializeApp(config)
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
