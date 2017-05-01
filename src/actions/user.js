import ActionTypes from 'constants/actionTypes';

export function incrementUserWord() {
    return { type: ActionTypes.IncrementUserWordIndex };
}

export function decrementUserWord() {
    return { type: ActionTypes.DecrementUserWordIndex };
}