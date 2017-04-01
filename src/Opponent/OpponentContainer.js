import { connect } from 'react-redux';
import Opponent from './Opponent';

const mapStateToProps = (state) => {
  return {opponent: state.opponent};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpponentIndexUpdate: (wordIndex) => {
        dispatch({
            type: 'SET_OPPONENT_WORD_INDEX',
            index: wordIndex
        })
    }
  }
};

const OpponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Opponent);

export default OpponentContainer;