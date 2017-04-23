import ActionTypes from 'constants/actionTypes';
import { pathToJS } from 'react-redux-firebase';
import { getBattleSchema } from 'schemas/battle';
import { store } from 'store';

export function resetUserSearch(){
	return (dispatch) => {
		dispatch({type: ActionTypes.ResetUserSearch});
	}
}

export function searchUsers(query) {
    return (dispatch, getState, getFirebase) => { 
		dispatch({type: ActionTypes.UserSearchRequested});

		const { firebase } = store.getState();
		const { uid } = pathToJS(firebase, 'auth');
		
		const firebaseRef = getFirebase();
		firebaseRef.ref('users')
			.orderByChild('email')
			.startAt(query)
			.endAt(`${query}\uf8ff`)
			.limitToFirst(20)
			.on("child_added", (snapshot) => {
				if(snapshot.key !== uid){
					dispatch({
						type: ActionTypes.UserSearchItemRetrieved,
						payload:{
							user: {
								...snapshot.val(),
								key: snapshot.key
							}
						}
					});
				}
			});
	};
}

export function createBattle(name, opponents){
	return (dispatch, getState, getFirebase) => {
		const { firebase } = store.getState();
		const { uid } = pathToJS(firebase, 'auth');

		const allUsers = [...opponents, uid];

		const firebaseRef = getFirebase();
		const key = firebaseRef.ref('battles').push().key;
		const schema = getBattleSchema(key, name, allUsers);
		firebaseRef.set(`battles/${key}`, schema);
		allUsers.forEach(userId => {
			firebaseRef.set(`users/${userId}/battles/${key}`, true);
		});
	};
}