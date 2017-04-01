import { combineReducers } from 'redux'
import user from './user'
import opponent from './opponent'

export default combineReducers({
  user,
  opponent
});
