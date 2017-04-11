import { connect } from 'react-redux';
import { getBattleActions, watchAuthActions } from '../actions';
import App from './App';

function mapStateToProps(state) {
  return {
    ...state.battle
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getBattleActions());
  watchAuthActions(dispatch);
  return {};
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
