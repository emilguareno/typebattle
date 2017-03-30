import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FullText from '../FullText/FullText';
import TextArea from '../TextArea/TextArea';
import FirebaseService from '../firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: []
    };
  }
  initText(value){
    this.setState({
      text: this.cleanUpText(value.val()[2].text).split(' ') || []
    });
  }
  cleanUpText(text){
    return text.replace(/’/g, '\'');
  }
  getUsers(){
    return new Promise((resolve, reject) => {
      this.battles = FirebaseService.getDatabase().ref('battles/1/users'); 
      this.battles.on('value', (value) => {
        this.users = value.val();
        resolve(this.users);
      });
    });
  }
  getAvailableUser(user){
    return user && !user.connected;
  }
  getOpponentUser(users, userId){
    return users.filter((user) => {
      return user && user.id !== userId;
    })[0];
  }
  updateOpponentWordIndex(data){
    const opponent = data.val();
    this.props.onOpponentIndexUpdate(opponent.wordIndex);
  }
  onUsersLoaded(users){
    this.users = users;
    this.user = users.find(this.getAvailableUser);
    this.opponent = this.getOpponentUser(users, this.user.id);
    this.userRef = FirebaseService.getDatabase().ref(`battles/1/users/${this.user.id}`);
    this.opponentRef = FirebaseService.getDatabase().ref(`battles/1/users/${this.opponent.id}`);
    this.opponentRef.on('value', this.updateOpponentWordIndex.bind(this));
    this.userRef.onDisconnect().update({connected: false});
    this.userRef.update({connected: true});
  }
  componentDidMount(){
    this.challenges = FirebaseService.getDatabase().ref('challenges'); 
    this.challenges.on('value', this.initText.bind(this));
    this.getUsers().then(this.onUsersLoaded.bind(this));
  }
  incrementMyWord(){
    this.props.onIncrementMyWord();
    this.userRef.update({wordIndex: this.props.user.wordIndex + 1 });
  }
  decrementMyWord(){
    this.props.onDecrementMyWord();
    this.userRef.update({wordIndex: this.props.user.wordIndex - 1 });
  }
  render() {
    return (
      <div className="App">

        <div className="user">
          <FullText text={this.state.text} currentIndex={this.props.user.wordIndex} />
          <TextArea 
            text={this.state.text} 
            onCorrectWord={this.incrementMyWord.bind(this)} 
            onWordDeleted={this.decrementMyWord.bind(this)} 
            currentIndex={this.props.user.wordIndex} />
        </div>
        
        <div className="opponent">
          <FullText text={this.state.text} currentIndex={this.props.opponent.wordIndex} />
        </div>

      </div>
    );
  }
}

export default App;
