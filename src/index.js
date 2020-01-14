import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './rootSaga';

import {saveState, loadState} from './localStorage'
import throttle from 'lodash/throttle'

import { BrowserRouter as Router } from "react-router-dom";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();


const persistedState = loadState()
const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
);

store.subscribe( throttle(() => {
    saveState({
        cartItems: store.getState().cartItems
    })
}, 1000))

sagaMiddleware.run(rootSaga);




ReactDOM.render(
    <Router>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root'));

if (module.hot) { module.hot.accept(App); }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








