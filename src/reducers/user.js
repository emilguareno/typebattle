import ActionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
    wordIndex: 0,
    auth: {}
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.IncrementUserWordIndex: {
        return {
            wordIndex: state.wordIndex + 1
        };
    }
    case ActionTypes.DecrementUserWordIndex: {
        return {
            wordIndex: state.wordIndex - 1
        };
    }
    case ActionTypes.AuthChanged: {
        const { user } = action;
        return {
            auth: user
        };
    }
    default:
      return state;
  }
}