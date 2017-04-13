export function getOpponents(battle, auth) {
    const filterUserId = (id) => {
        return id !== auth.uid;
    }
    return Object.keys(battle.users).filter(filterUserId).map((k) => battle.users[k]);
}

export function getCurrentRound(battle) {
    const round = battle.rounds[battle.currentRound];
    return {
        ...round,
        text: round.text.split(' ')
    };
}

//Temporary function until battles are being created properly
//TODO: remove this
export function createUserIfNotInDb(battlePath, battle, auth, firebase){
    const { uid } = auth;
    if(!battle.users[uid]){
        firebase.update(`${battlePath}/users/${uid}`, {
            connected: false,
            id: uid,
            wordIndex: 0
        });
    }
}