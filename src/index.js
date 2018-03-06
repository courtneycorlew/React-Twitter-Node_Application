import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

// Let the reducers handle initial state
const initialState = {}

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

, document.getElementById('root')
)
registerServiceWorker()
