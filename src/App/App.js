import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UserContainer from '../User/UserContainer';
import OpponentContainer from '../Opponent/OpponentContainer';
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
  onUsersLoaded(users){
    this.users = users;
    this.user = users.find(this.getAvailableUser);
    this.opponent = this.getOpponentUser(users, this.user.id);
    this.userRef = FirebaseService.getDatabase().ref(`battles/1/users/${this.user.id}`);
    this.opponentRef = FirebaseService.getDatabase().ref(`battles/1/users/${this.opponent.id}`);
    this.userRef.onDisconnect().update({connected: false});
    this.userRef.update({connected: true});
    this.forceUpdate();
  }
  componentDidMount(){
    this.challenges = FirebaseService.getDatabase().ref('challenges'); 
    this.challenges.on('value', this.initText.bind(this));
    this.getUsers().then(this.onUsersLoaded.bind(this));
  }
  render() {
    return (
      <div className="App">
        <UserContainer text={this.state.text} userRef={this.userRef} />
        <OpponentContainer text={this.state.text} opponentRef={this.opponentRef} />
      </div>
    );
  }
}

export default App;
