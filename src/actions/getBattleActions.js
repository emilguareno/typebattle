import ActionTypes from '../constants/actionTypes';
import database from '../firebase';

export default function getBattle() {
    return dispatch => {
        dispatch(getBattleRequestedAction());
        const battleID = 1; //should be ID retrieved from route URL
        return database.ref(`battles/${battleID}`).once('value', snap => {
                const battle = snap.val();
                const formattedRounds = battle.rounds.map(obj => {
                    return {
                        ...obj,
                        text: obj.text.split(' ')
                    };
                })
                const formattedBattle = {
                    ...battle,
                    rounds: formattedRounds,
                    id: battleID
                }
                dispatch(getBattleFulfilledAction(formattedBattle))
            })
            .catch((error) => {
                console.log(error);
                dispatch(getBattleRejectedAction());
            });
    }
}

function getBattleRequestedAction() {
    return {
        type: ActionTypes.GetBattleRequested
    };
}

function getBattleRejectedAction() {
    return {
        type: ActionTypes.GetBattleRejected
    }
}

function getBattleFulfilledAction(battle) {
    return {
        type: ActionTypes.GetBattleFulfilled,
        battle
    };
}