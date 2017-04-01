import { connect } from 'react-redux';
import User from './User';

const mapStateToProps = (state) => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementUserWord: () => {
      dispatch({
          type: 'INCREMENT_USER_WORD_INDEX'
      })
    },
    onDecrementUserWord: () => {
      dispatch({
          type: 'DECREMENT_USER_WORD_INDEX'
      })
    }
  }
};

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default UserContainer;