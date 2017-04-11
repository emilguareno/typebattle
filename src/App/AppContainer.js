import { connect } from 'react-redux';
import { getBattleActions, watchAuthActions } from '../actions';
import App from './App';
import { store } from '../store';

function mapStateToProps(state) {
    return {
        ...state.battle,
        auth: state.user.auth,
        round: state.battle.rounds[state.battle.currentRound],
        opponents: getOpponents(state)
    };
}

function getOpponents(state) {
    const filterUserId = (id) => {
        return id !== state.user.auth.uid;
    }
    return Object.keys(state.battle.users).filter(filterUserId).map((k) => state.battle.users[k]);
}

function mapDispatchToProps() {
    store.dispatch(getBattleActions());
    watchAuthActions(store.dispatch);
    return {};
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;