import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import user from './user';

export default combineReducers({
  user,
  router: routerReducer,
  firebase: firebaseStateReducer
});
