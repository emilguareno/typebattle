import React, { Component } from 'react';
import User from 'components/User';
import { Link } from 'react-router-dom';
import OpponentList from 'components/OpponentList';

class BattleGroundComponent extends Component {
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

export default BattleGroundComponent;