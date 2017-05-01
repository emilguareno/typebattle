import React, { Component } from 'react';
import { roundPropTypes, userPropTypes } from 'helpers/propTypes';
import FullText from 'components/FullText/FullText';
import './Opponent.css';

class Opponent extends Component {
    render() {
        return (
            this.props.opponent.connected ? (
                <div className="opponent">
                    <FullText text={this.props.round.text} currentIndex={this.props.opponent.wordIndex} />
                </div>
            ) : (
                <p> User is not online </p>
            )
        );
    }
}

Opponent.propTypes = {
    round: roundPropTypes.isRequired,
    opponent: userPropTypes.isRequired
}

export default Opponent;
