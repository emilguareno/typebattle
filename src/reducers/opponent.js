const INITIAL_STATE = {
    wordIndex: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPPONENT_WORD_INDEX':
        return {
            wordIndex: action.index
        };
    default:
      return state;
  }
};