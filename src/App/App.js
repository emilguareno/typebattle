import React, { Component } from 'react';
import UserContainer from '../User/UserContainer';
import OpponentContainer from '../Opponent/OpponentContainer';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.inProgress === true 
        ?
        (
            <span>loading...</span>)
        : 
        (
        <Header />
        {this.props.inProgress === true ? (
            <span>loading...</span>
          ) : (
          <div>
            <Link to="/test">Test link</Link>
            <UserContainer text={this.props.text} />
            <OpponentContainer text={this.props.text} />
          </div>
        )
        }
        )}
      </div>
    );
  }
}

export default App;
