import ActionTypes from '../constants/actionTypes';
import database from '../firebase';
import { store } from '../store';

export function incrementUserWord (dispatch){
    const state = store.getState();
    const userId = state.user.auth.uid;
    database.ref(`battles/${state.battle.id}/users/${userId}`).update({wordIndex: state.user.wordIndex + 1 });
    dispatch({ type: ActionTypes.IncrementUserWordIndex });
}

export function decrementUserWord (dispatch){
    const state = store.getState();
    const userId = state.user.auth.uid;
    database.ref(`battles/${state.battle.id}/users/${userId}`).update({wordIndex: state.user.wordIndex + 1 });
    dispatch({ type: ActionTypes.DecrementUserWordIndex });
}