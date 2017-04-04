import { combineReducers } from 'redux';
import user from './user';
import opponent from './opponent';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  user,
  opponent,
  router: routerReducer
});
