import React from 'react';
import { roundPropTypes, userPropTypes, userProfilePropTypes } from 'helpers/propTypes';
import FullText from 'components/shared/FullText';

const OpponentComponent = (props) => (
    props.opponent.connected ? (
        <div className="opponent">
            <FullText text={props.round.text} currentIndex={props.opponent.wordIndex} />
        </div>
    ) : (
        <p> {props.profile.name} is not online </p>
    )
);

OpponentComponent.propTypes = {
    round: roundPropTypes.isRequired,
    opponent: userPropTypes.isRequired,
    profile: userProfilePropTypes
}

export default OpponentComponent;
