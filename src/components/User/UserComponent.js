import React from 'react';
import PropTypes from 'prop-types';
import { battlePropTypes, roundPropTypes, userPropTypes } from 'helpers/propTypes';
import FullText from 'components/shared/FullText';
import TextBox from 'components/shared/TextBox';

const UserComponent = (props) => (
	<div className="user">
		<FullText text={props.round.text} currentIndex={props.user.wordIndex} />
		<TextBox 
			text={props.round.text} 
			onCorrectWord={props.onIncrementUserWord} 
			onWordDeleted={props.onDecrementUserWord} 
			currentIndex={props.user.wordIndex} />
	</div>
);

UserComponent.propTypes = {
    battle: battlePropTypes.isRequired,
    auth: PropTypes.object.isRequired,
    onDecrementUserWord: PropTypes.func.isRequired,
    onIncrementUserWord: PropTypes.func.isRequired,
    round: roundPropTypes.isRequired,
    user: userPropTypes.isRequired
}

export default UserComponent;