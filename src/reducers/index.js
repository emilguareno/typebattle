import { combineReducers } from 'redux';
import user from './user';
import opponent from './opponent';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';

export default combineReducers({
  user,
  opponent,
  router: routerReducer,
  firebase: firebaseStateReducer
});
