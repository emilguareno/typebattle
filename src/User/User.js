import React, { Component } from 'react';
import FullText from '../FullText/FullText';
import TextArea from '../TextArea/TextArea';
import './User.css';

class User extends Component {
    incrementUserWord(){
        this.props.onIncrementUserWord();
        this.props.userRef.update({wordIndex: this.props.user.wordIndex + 1 });
    }
    decrementUserWord(){
        this.props.onDecrementUserWord();
        this.props.userRef.update({wordIndex: this.props.user.wordIndex - 1 });
    }
    render() {
        return (
            <div className="user">
                <FullText text={this.props.text} currentIndex={this.props.user.wordIndex} />
                <TextArea 
                    text={this.props.text} 
                    onCorrectWord={this.incrementUserWord.bind(this)} 
                    onWordDeleted={this.decrementUserWord.bind(this)} 
                    currentIndex={this.props.user.wordIndex} />
            </div>
        );
    }
}

export default User;
