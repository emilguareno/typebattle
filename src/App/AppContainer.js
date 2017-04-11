import { connect } from 'react-redux';
import { getBattle, watchAuth } from '../actions';
import App from './App';

function mapStateToProps(state) {
  return {
    ...state.battle
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getBattle());
  watchAuth(dispatch);
  return {};
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
