import { connect } from 'react-redux';
import { incrementUserWord, decrementUserWord } from '../actions'
import User from './User';

const mapStateToProps = (state) => {
    return {
        inProgress: state.battle.inProgress,
        user: state.user,
        round: state.battle.rounds[state.battle.currentRound]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementUserWord: () => {
            incrementUserWord(dispatch);
        },
        onDecrementUserWord: () => {
            decrementUserWord(dispatch);
        }
    }
};

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;