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