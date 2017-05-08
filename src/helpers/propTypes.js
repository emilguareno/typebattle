import PropTypes from 'prop-types';

const textPropType = PropTypes.arrayOf(PropTypes.string);

export const battlePropTypes = PropTypes.shape({
	currentRound: PropTypes.number,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	rounds: PropTypes.array,
	userProfiles: PropTypes.object,
	users: PropTypes.object
});

export const roundPropTypes = PropTypes.shape({
	completed: PropTypes.bool,
	text: textPropType
});

export const userPropTypes = PropTypes.shape({
	connected: PropTypes.bool,
	id: PropTypes.string,
	wordIndex: PropTypes.number
});

export const userProfilePropTypes = PropTypes.shape({
	battles: PropTypes.object,
	email: PropTypes.string,
	name: PropTypes.string,
	photo: PropTypes.string
});