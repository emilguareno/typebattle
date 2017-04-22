import ActionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
    isLoading: false,
	userSearchResults: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ResetUserSearch: {
        return {
            ...state,
            userSearchResults: []
        };
    }
    case ActionTypes.UserSearchRequested: {
        return {
            ...state,
            isLoading: true
        };
    }
    case ActionTypes.UserSearchItemRetrieved: {
		const { user } = action.payload;
		const modifiedUser = {
			text: user.email,
			value: user.key,
            key: user.key
		};
        return {
            ...state,
            isLoading: false,
			userSearchResults: [...state.userSearchResults, modifiedUser]
        };
    }
    default:
      return state;
  }
}