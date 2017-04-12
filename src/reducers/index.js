import { combineReducers } from 'redux';
import user from './user';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';

export default combineReducers({
  user,
  router: routerReducer,
  firebase: firebaseStateReducer
});
