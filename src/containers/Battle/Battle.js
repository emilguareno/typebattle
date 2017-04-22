import React, { Component } from 'react';
import { firebaseConnect, pathToJS, dataToJS, getFirebase } from 'react-redux-firebase';
import { getOpponents, getCurrentRound, createUserIfNotInDb } from '../../helpers/battle';
import { connect } from 'react-redux';
import User from '../User/User';
import { Link } from 'react-router-dom';
import Opponent from '../Opponent/Opponent';

let battlePath;

class Battle extends Component {
	render() {
		return (
		<div className="Battle">
			{this.props.battle ? (
				<div>
				<Link to="/test">Test link</Link>
				<User {...this.props} />
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

const firebaseWrapper = firebaseConnect(
  () => ([
    { path: battlePath }
]))(Battle);

export default connect(({ firebase }, ownProps) => {
    battlePath = `battles/${ownProps.match.params.id}`;
    const battle = dataToJS(firebase, battlePath);
    const auth = pathToJS(firebase, 'auth');
    if(battle){
        const firebase = getFirebase();
        createUserIfNotInDb(battlePath, battle, auth, firebase);
        return {
            battle,
            round: getCurrentRound(battle),
            opponents: getOpponents(battle, auth),
            auth
        }
    }
    return {};
})(firebaseWrapper)