import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import config from './firebase/config';
import reducers from './reducers';

export const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithFirebase = composeEnhancers(
  reactReduxFirebase(config),
  applyMiddleware(
    logger, 
    routeMiddleware,
    thunk.withExtraArgument(getFirebase)
  )
)(createStore);

export const store = createStoreWithFirebase(reducers);