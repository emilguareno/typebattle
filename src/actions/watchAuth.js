import ActionTypes from '../constants/actionTypes';
import { auth } from '../firebase';

export default (dispatch) =>{
    auth.onAuthStateChanged((user) => {
        dispatch(getAuthChangedAction(user));
    });
}

function getAuthChangedAction(user) {
  return {
    type: ActionTypes.AuthChanged,
    user
  };
}