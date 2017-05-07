import React, { Component } from 'react';
import User from 'containers/User/User';
import { Link } from 'react-router-dom';
import OpponentList from 'containers/Opponent/OpponentList';

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
					<User {...this.props} />
					<OpponentList {...this.props} />
				</div>
			</div>
		);
	}
}

export default Battle;