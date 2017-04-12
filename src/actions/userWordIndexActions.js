import ActionTypes from '../constants/actionTypes';

export function incrementUserWord(dispatch) {
    return { type: ActionTypes.IncrementUserWordIndex };
}

export function decrementUserWord(dispatch) {
    return { type: ActionTypes.DecrementUserWordIndex };
}