import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FullText from './FullText';
import FirebaseService from './firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      wordIndex: 0
    };
  }
  initText(value){
    this.setState({
      text: value.val()[1].text
    })
  }
  componentDidMount(){
    this.challenges = FirebaseService.getDatabase().ref('challenges');
    this.challenges.on('value', this.initText.bind(this));
  }
  render() {
    return (
      <div className="App">
        <FullText text={this.state.text} currentIndex={this.state.wordIndex}/>
      </div>
    );
  }
}

export default App;
