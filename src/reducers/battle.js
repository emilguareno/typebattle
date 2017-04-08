import ActionTypes from '../constants/actionTypes';
const INITIAL_STATE = {
    inProgress: null,
    error: '',
    success: '',
    text: []
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ActionTypes.GetTextRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetTextRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting text.',
      });
    }
    case ActionTypes.GetTextFulfilled: {
      const { text } = action;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got text.',
        text
      });
      return newState;
    }
    case ActionTypes.OpponentIndexChanged: {
      const newState = Object.assign({}, state);
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }
    default:
      return state;
  }
}
