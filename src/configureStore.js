import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import throttle from 'lodash/throttle';
import reducer from './reducers';
import rootSaga from './rootSaga';

import { saveState, loadState } from './localStorage';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const persistedState = loadState();

  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.subscribe(
    throttle(() => {
      saveState({
        cartItems: store.getState().cartItems,
      });
    }, 1000),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
