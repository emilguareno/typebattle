import React, { Component } from 'react';
import FullText from '../../components/FullText/FullText';
import './Opponent.css';

class Opponent extends Component {
    render() {
        return (
            <div className="opponent">
                <FullText text={this.props.round.text} currentIndex={this.props.opponent.wordIndex} />
            </div>
        );
    }
}

export default Opponent;
