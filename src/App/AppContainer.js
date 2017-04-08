import { connect } from 'react-redux';
import { getText } from '../actions/getText';
import App from './App';

function mapStateToProps(state) {
  return {
    ...state.battle
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getText());
  return {};
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
