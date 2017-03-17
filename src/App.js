import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseService from './firebase';

class App extends Component {
  checkBox(e){
    this.challenges.set({
      checked: e.target.checked
    });
  }
  onCheckBoxChange(data){
    this.refs.checkbox.checked = data.val().checked;
    console.log('Checkbox checked', data.val());
  }
  componentDidMount(){
    this.challenges = FirebaseService.getDatabase().ref('challenges');
    this.challenges.on('value', this.onCheckBoxChange.bind(this));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="checkbox" id="cbox1" value="first_checkbox" ref="checkbox" onChange={this.checkBox.bind(this)}/>
      </div>
    );
  }
}

export default App;
