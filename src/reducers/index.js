const INITIAL_STATE = {
    me: {
        wordIndex: 0
    },
    opponent: {
        wordIndex: 0
    }
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_MY_WORD_INDEX':
        return {
            ...state, 
            me: {
                wordIndex: state.me.wordIndex + 1
            }
        };
    case 'DECREMENT_MY_WORD_INDEX':
        return {
            ...state, 
            me: {
                wordIndex: state.me.wordIndex - 1
            }
        };
    case 'SET_OPPONENT_WORD_INDEX':
        return {
            ...state, 
            opponent: {
                wordIndex: action.index
            }
        };
    default:
      return state
  }
}
