import React, { Component } from 'react';
import User from 'containers/User/User';
import { Link } from 'react-router-dom';
import Opponent from 'containers/Opponent/Opponent';

class Battle extends Component {
	componentWillMount() {
		const { battle, auth } = this.props;
		this.props.onUserStatusChanged(battle.id, auth.uid, true);
	}
	componentWillUnmount() {
		const { battle, auth } = this.props;
		this.props.onUserStatusChanged(battle.id, auth.uid, false);
	}
	render() {
		return (
			<div className="Battle">
				<div>
					<Link to="/test">Test link</Link>
					<User round={this.props.round} battle={this.props.battle} auth={this.props.auth} />
					{this.props.opponents.map((opponent) => {
						return <Opponent key={opponent.id} round={this.props.round} opponent={opponent}/>
					})}
				</div>
			</div>
		);
	}
}

export default Battle;