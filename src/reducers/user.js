import ActionTypes from '../constants/actionTypes';
const INITIAL_STATE = {
    wordIndex: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_USER_WORD_INDEX':
    case ActionTypes.IncrementUserWordIndex: {
        return {
            wordIndex: state.wordIndex + 1
        };
    case 'DECREMENT_USER_WORD_INDEX':
    }
    case ActionTypes.DecrementUserWordIndex: {
        return {
            wordIndex: state.wordIndex - 1
        };
    default:
      return state;
  }
}