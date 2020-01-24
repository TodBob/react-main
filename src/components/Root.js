import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'

const Root = ({store}) => (
    <Router>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </Router>
)

export default Root