import { connect } from 'react-redux';
import { searchUsers, resetUserSearch, createBattle } from '../../actions';
import CreateBattleModal from './CreateBattleModal';

function mapStateToProps({ battle }){
    return {
        results: battle.userSearchResults,
        isLoading: battle.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchChange: (event, data) => {
            dispatch(resetUserSearch());
            if(data.length > 2){
                dispatch(searchUsers(data));
            }
        },
        onBattleFormSubmit: (values) => {
            const { battle_name, opponents} = values;
            dispatch(createBattle(battle_name, opponents.value));
        }
    }
}

const CreateBattle = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBattleModal)

export default CreateBattle;