import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementMyWord: () => {
      dispatch({
          type: 'INCREMENT_MY_WORD_INDEX'
      })
    },
    onDecrementMyWord: () => {
      dispatch({
          type: 'DECREMENT_MY_WORD_INDEX'
      })
    },
    onOpponentIndexUpdate: (wordIndex) => {
        dispatch({
            type: 'SET_OPPONENT_WORD_INDEX',
            index: wordIndex
        })
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;