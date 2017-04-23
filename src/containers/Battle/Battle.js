import React, { Component } from 'react';
import { firebaseConnect, pathToJS, dataToJS } from 'react-redux-firebase';
import { battlePropTypes, roundPropTypes } from 'helpers/propTypes';
import { getOpponents, getCurrentRound } from 'helpers/battle';
import { connect } from 'react-redux';
import User from 'containers/User/User';
import { Link } from 'react-router-dom';
import Opponent from 'containers/Opponent/Opponent';

let battlePath;

class Battle extends Component {
	render() {
		return (
		<div className="Battle">
			{this.props.battle ? (
				<div>
				<Link to="/test">Test link</Link>
				<User round={this.props.round} battle={this.props.battle} auth={this.props.auth} />
				{this.props.opponents.map((opponent) => {
					return <Opponent key={opponent.id} round={this.props.round} opponent={opponent}/>
				})}
				</div>
				) : (
				<span>loading...</span>
			)}
		</div>
		);
	}
}

Battle.propTypes = {
	battle: battlePropTypes,
	round: roundPropTypes
}

const firebaseWrapper = firebaseConnect(
  () => ([
    { path: battlePath }
]))(Battle);

export default connect(({ firebase }, ownProps) => {
    battlePath = `battles/${ownProps.match.params.id}`;
    const battle = dataToJS(firebase, battlePath);
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
})(firebaseWrapper)