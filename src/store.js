import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import config from './firebase/config.json';
import { reactReduxFirebase } from 'react-redux-firebase';

export const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithFirebase = composeEnhancers(
    applyMiddleware(logger, routeMiddleware),
    reactReduxFirebase(config, { userProfile: 'users' })
)(createStore);
export const store = createStoreWithFirebase(reducers);