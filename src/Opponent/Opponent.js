import React, { Component } from 'react';
import FullText from '../FullText/FullText';
import './Opponent.css';

class Opponent extends Component {
    updateOpponentWordIndex(data){
        const opponent = data.val();
        this.props.onOpponentIndexUpdate(opponent.wordIndex);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.opponentRef !== nextProps.opponentRef){
            nextProps.opponentRef.on('value', this.updateOpponentWordIndex.bind(this));
        }
    }
    render() {
        return (
            <div className="opponent">
                <FullText text={this.props.text} currentIndex={this.props.opponent.wordIndex} />
            </div>
        );
    }
}

export default Opponent;
