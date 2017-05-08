import React, { Component } from 'react';
import { firebaseConnect, pathToJS, populatedDataToJS } from 'react-redux-firebase';
import { battlePropTypes, roundPropTypes } from 'helpers/propTypes';
import { getOpponents, getCurrentRound } from 'helpers/battle';
import { changeUserStatus } from 'actions/battle';
import { connect } from 'react-redux';
import Battle from './Battle';

class BattleContainer extends Component {
	render() {
		return (
			this.props.battle ? (
				<Battle {...this.props} />
			) : (
				<span>loading...</span>
			)
		);
	}
}

BattleContainer.propTypes = {
	battle: battlePropTypes,
	round: roundPropTypes
}

const populates = [{child: 'userProfiles', root: 'users'}];

const firebaseWrapper = firebaseConnect(
  ({match}) => {
      return [{ path: `battles/${match.params.id}`, populates }]
})(BattleContainer);

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