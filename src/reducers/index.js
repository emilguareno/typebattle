const INITIAL_STATE = {
    wordIndex: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_WORD_INDEX':
        return {...state, wordIndex: state.wordIndex + 1};
    case 'DECREMENT_WORD_INDEX':
        return {...state, wordIndex: state.wordIndex - 1};
    default:
      return state
  }
}
