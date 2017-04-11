import { combineReducers } from 'redux';
import user from './user';
import battle from './battle';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  user,
  battle,
  router: routerReducer
});
