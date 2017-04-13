import React, { Component } from 'react';
import FullText from '../FullText/FullText';
import TextBox from '../TextBox/TextBox';
import './User.css';

class User extends Component {
    incrementUserWord(){
        this.props.onIncrementUserWord();
    }
    decrementUserWord(){
        this.props.onDecrementUserWord();
    }
    render() {
        return (
            <div className="user">
                <FullText text={this.props.round.text} currentIndex={this.props.user.wordIndex} />
                <TextBox 
                    text={this.props.round.text} 
                    onCorrectWord={this.incrementUserWord.bind(this)} 
                    onWordDeleted={this.decrementUserWord.bind(this)} 
                    currentIndex={this.props.user.wordIndex} />
            </div>
        );
    }
}

export default User;
