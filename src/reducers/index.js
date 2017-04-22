import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import battle from './battle';

export default combineReducers({
  user,
  battle,
  router: routerReducer,
  firebase: firebaseStateReducer,
  form: formReducer
});
