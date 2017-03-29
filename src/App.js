import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FullText from './FullText';
import TextArea from './TextArea';
import FirebaseService from './firebase';

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
  componentDidMount(){
    this.challenges = FirebaseService.getDatabase().ref('challenges');
    this.challenges.on('value', this.initText.bind(this));
  }
  render() {
    return (
      <div className="App">
        <FullText text={this.state.text} currentIndex={this.props.wordIndex} />
        <TextArea 
          text={this.state.text} 
          onCorrectWord={this.props.onIncrementWord} 
          onWordDeleted={this.props.onDecrementWord} 
          currentIndex={this.props.wordIndex} />
      </div>
    );
  }
}

export default App;
