import { connect } from 'react-redux';
import { getText, watchAuth } from '../actions';
import App from './App';

function mapStateToProps(state) {
  return {
    ...state.battle
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getText());
  watchAuth(dispatch);
  return {};
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
