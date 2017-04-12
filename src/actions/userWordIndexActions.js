import ActionTypes from '../constants/actionTypes';

export function incrementUserWord(dispatch) {
    dispatch({ type: ActionTypes.IncrementUserWordIndex });
}

export function decrementUserWord(dispatch) {
    dispatch({ type: ActionTypes.DecrementUserWordIndex });
}