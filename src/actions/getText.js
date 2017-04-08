import ActionTypes from '../constants/actionTypes';
import database from '../firebase';

export function getText() {
  return dispatch => {
    dispatch(getTextRequestedAction());
    return database.ref('challenges').once('value', snap => {
      const text = snap.val()[2].text.split(' ');
      dispatch(getTextFulfilledAction(text))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getTextRejectedAction());
    });
  }
}
function getTextRequestedAction() {
  return {
    type: ActionTypes.GetTextRequested
  };
}

function getTextRejectedAction() {
  return {
    type: ActionTypes.GetTextRejected
  }
}

function getTextFulfilledAction(text) {
  return {
    type: ActionTypes.GetTextFulfilled,
    text
  };
}
