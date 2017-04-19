import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import user from './user';
import battle from './battle';

export default combineReducers({
  user,
  battle,
  router: routerReducer,
  firebase: firebaseStateReducer
});
