import ActionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
    wordIndex: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.IncrementUserWordIndex: {
        return {
            ...state,
            wordIndex: state.wordIndex + 1
        };
    }
    case ActionTypes.DecrementUserWordIndex: {
        return {
            ...state,
            wordIndex: state.wordIndex - 1
        };
    }
    default:
      return state;
  }
}