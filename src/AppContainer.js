import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    wordIndex: state.wordIndex
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementWord: () => {
      dispatch({
          type: 'INCREMENT_WORD_INDEX'
      })
    },
    onDecrementWord: () => {
      dispatch({
          type: 'DECREMENT_WORD_INDEX'
      })
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;