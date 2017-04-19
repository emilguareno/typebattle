import { connect } from 'react-redux';
import { searchUsers, resetUserSearch } from '../../actions';
import CreateBattleModal from './CreateBattleModal';

const mapStateToProps = (state) => {
    return {
        results: state.battle.userSearchResults,
        isLoading: state.battle.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event, data) => {
        dispatch(resetUserSearch());
        if(data.length > 2){
            dispatch(searchUsers(data));
        }
    }
  }
}

const CreateBattle = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBattleModal)

export default CreateBattle;