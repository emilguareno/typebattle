import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from './middleware/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));

export default store;