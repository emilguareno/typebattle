import ActionTypes from '../constants/actionTypes';
import database from '../firebase';
import { store } from '../store';

export function incrementUserWord(dispatch) {
    dispatch({ type: ActionTypes.IncrementUserWordIndex });
}

export function decrementUserWord(dispatch) {
    dispatch({ type: ActionTypes.DecrementUserWordIndex });
}

function select(state) {
    return state.user.wordIndex;
}

let currentValue;
function onStateChange() {
    let previousValue = currentValue;
    currentValue = select(store.getState())
    if (typeof previousValue !== 'undefined' && previousValue !== currentValue) {
        const state = store.getState();
        const userId = state.user.auth.uid;
        database.ref(`battles/${state.battle.id}/users/${userId}`).update({wordIndex: currentValue });
    }
}

store.subscribe(onStateChange);