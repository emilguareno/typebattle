import PropTypes from 'prop-types';

const textPropType = PropTypes.arrayOf(PropTypes.string);

export const battlePropTypes = PropTypes.shape({
	currentRound: PropTypes.number,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	rounds: PropTypes.array,
	users: PropTypes.object
});

export const roundPropTypes = PropTypes.shape({
	completed: PropTypes.bool,
	text: textPropType
});

export const userPropTypes = PropTypes.shape({
	wordIndex: PropTypes.number
});