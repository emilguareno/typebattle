import React from 'react';
import PropTypes from 'prop-types';
import { battlePropTypes, userPropTypes } from 'helpers/propTypes';
import Opponent from './Opponent';

const OpponentListComponent = (props) => (
	<div>
		{props.opponents.map((opponent) => {
			const opponentDetails = props.battle.userProfiles[opponent.id];
			return <Opponent key={opponent.id} {...props} profile={opponentDetails} opponent={opponent}/>
		})}
	</div>
);

OpponentListComponent.propTypes = {
	battle: battlePropTypes,
	opponents: PropTypes.arrayOf(userPropTypes)
};

export default OpponentListComponent;