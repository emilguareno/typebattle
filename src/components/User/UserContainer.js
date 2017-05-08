import { connect } from 'react-redux';
import { getFirebase } from 'react-redux-firebase';
import { store } from 'store';
import { incrementUserWord, decrementUserWord } from 'actions';
import UserComponent from './UserComponent';

const mapStateToProps = ({ user }) => {
    return {
        user
    };
};

let props;
const mapDispatchToProps = (dispatch, ownProps) => {
    props = ownProps;
    return {
        onIncrementUserWord: () => {
            dispatch(incrementUserWord());
        },
        onDecrementUserWord: () => {
            dispatch(decrementUserWord());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserComponent);
/**
 * 
 * When the user word index increases or decreases, the regular Redux state is used, as we want the 
 * ui to be updated immediately. Below, we register to the Redux state changes and update the 
 * firebase word index for the user whenever the state changes
 */
let currentValue;
function onStateChange() {
    let previousValue = currentValue;
    const state = store.getState();
    currentValue = state.user.wordIndex;
    if (typeof previousValue !== 'undefined' && previousValue !== currentValue) {
        const battleId = props.battle.id;
        const { uid } = props.auth;
        const firebase = getFirebase();
        firebase.set(`battles/${battleId}/users/${uid}/wordIndex`, currentValue);
    }
}

store.subscribe(onStateChange);
