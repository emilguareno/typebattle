import { isEmpty } from 'lodash';
import ActionTypes from '../constants/actionTypes';
import database from '../firebase';
import { store } from '../store';

const getBattleId = state => {
    return state.battle.id;
};

function opponentIndexChanged(opponent) {
    store.dispatch({ 
        type: ActionTypes.OpponentIndexChanged,
        opponent: opponent.val()
    });
}
export function watchOpponentWordIndex(id){
    const battleId = getBattleId(store.getState());
    database.ref(`battles/${battleId}/users/${id}`).on('value', opponentIndexChanged);
}

const select = (state) => {
    return state.battle.users;
}

let currentValue;
function onStateChange() {
    let previousValue = currentValue;
    currentValue = select(store.getState())
    if (isEmpty(previousValue) && !isEmpty(currentValue)) {
        const state = store.getState();
        const opponents = Object.keys(state.battle.users).map((k) => state.battle.users[k]);
        opponents.forEach((user) => {
            if(user.id !== state.user.auth.uid){
                watchOpponentWordIndex(user.id);
            }
        });
    }
}

store.subscribe(onStateChange);