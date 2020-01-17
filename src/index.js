import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import 'typeface-roboto'

import Root from './components/Root'
import configureStore from './configureStore'

/* import App from './components/App' */

const store = configureStore()

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);

/* if (module.hot) { module.hot.accept(App); } */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








