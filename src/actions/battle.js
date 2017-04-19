import ActionTypes from '../constants/actionTypes';

export function resetUserSearch(){
	return (dispatch) => {
		dispatch({type: ActionTypes.ResetUserSearch});
	}
}

export function searchUsers(query) {
    return (dispatch, getState, getFirebase) => { 
		dispatch({type: ActionTypes.UserSearchRequested});
		const firebase = getFirebase();
		firebase.ref('users')
			.orderByChild('email')
			.startAt(query)
			.endAt(`${query}\uf8ff`)
			.on("child_added", (snapshot) => {
				dispatch({
					type: ActionTypes.UserSearchItemRetrieved,
					payload:{
						user: {
							...snapshot.val(),
							key: snapshot.key
						}
					}
				});
			});
	};
}