const INITIAL_STATE = {
    wordIndex: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_MY_WORD_INDEX':
        return {
            wordIndex: state.wordIndex + 1
        };
    case 'DECREMENT_MY_WORD_INDEX':
        return {
            wordIndex: state.wordIndex - 1
        };
    default:
      return state;
  }
}