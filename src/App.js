import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FullText from './FullText';
import TextArea from './TextArea';
import FirebaseService from './firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: [],
      wordIndex: 0
    };
    this.increaseWordsIndex = this.increaseWordsIndex.bind(this);
    this.decreaseWordsIndex = this.decreaseWordsIndex.bind(this);
  }
  initText(value){
    this.setState({
      text: value.val()[1].text.split(' ')
    });
  }
  increaseWordsIndex(){
    this.setState({
      wordIndex: ++this.state.wordIndex
    });
  }
  decreaseWordsIndex(index){
    this.setState({
      wordIndex: --this.state.wordIndex
    });
  }
  componentDidMount(){
    this.challenges = FirebaseService.getDatabase().ref('challenges');
    this.challenges.on('value', this.initText.bind(this));
  }
  render() {
    return (
      <div className="App">
        <FullText text={this.state.text} currentIndex={this.state.wordIndex} />
        <TextArea 
          text={this.state.text} 
          onCorrectWord={this.increaseWordsIndex} 
          onWordDeleted={this.decreaseWordsIndex} 
          currentIndex={this.state.wordIndex} />
      </div>
    );
  }
}

export default App;
