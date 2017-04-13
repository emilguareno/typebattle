import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { reactReduxFirebase } from 'react-redux-firebase';
import config from './firebase/config';
import reducers from './reducers';

export const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithFirebase = composeEnhancers(
  reactReduxFirebase(config),
  applyMiddleware(logger, routeMiddleware)
)(createStore);

export const store = createStoreWithFirebase(reducers);