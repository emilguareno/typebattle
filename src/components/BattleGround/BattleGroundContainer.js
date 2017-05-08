import { firebaseConnect, pathToJS, populatedDataToJS } from 'react-redux-firebase';
import { getOpponents, getCurrentRound } from 'helpers/battle';
import { changeUserStatus } from 'actions/battle';
import { connect } from 'react-redux';
import BattleGroundComponent from './BattleGroundComponent';

const populates = [{child: 'userProfiles', root: 'users'}];

const firebaseWrapper = firebaseConnect(
  ({match}) => {
      return [{ path: `battles/${match.params.id}`, populates }]
})(BattleGroundComponent);

function mapStateToProps({ firebase }, ownProps) {
    const battlePath = `battles/${ownProps.match.params.id}`;
    const battle = populatedDataToJS(firebase, battlePath, populates);
    const auth = pathToJS(firebase, 'auth');
    if(battle){
        return {
            battle,
            round: getCurrentRound(battle),
            opponents: getOpponents(battle, auth),
			auth
        }
    }
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onUserStatusChanged: (battleId, userId, connected) => {
            dispatch(changeUserStatus(battleId, userId, connected));
        }
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(firebaseWrapper)