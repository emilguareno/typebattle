import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, dataToJS, getFirebase } from 'react-redux-firebase';
import App from './App';

const battlePath = 'battles/1';

const fbWrapped = firebaseConnect([
    { path: battlePath }
])(App);

function getOpponents(battle, auth) {
    const filterUserId = (id) => {
        return id !== auth.uid;
    }
    return Object.keys(battle.users).filter(filterUserId).map((k) => battle.users[k]);
}

function getCurrentRound(battle) {
    const round = battle.rounds[battle.currentRound];
    return {
        ...round,
        text: round.text.split(' ')
    };
}

//Temporary function until battles are being created properly
//TODO: remove this
function createUserIfNotInDb(battle, auth){
    const { uid } = auth;
    if(!battle.users[uid]){
        const firebase = getFirebase();
        firebase.update(`${battlePath}/users/${uid}`, {
            connected: false,
            id: uid,
            wordIndex: 0
        });
    }
}

export default connect(({ firebase }) => {
    const battle = dataToJS(firebase, battlePath);
    const auth = pathToJS(firebase, 'auth');
    if(battle){
        createUserIfNotInDb(battle, auth);
        return {
            battle,
            round: getCurrentRound(battle),
            opponents: getOpponents(battle, auth),
            auth
        }
    }
    return {};
})(fbWrapped)