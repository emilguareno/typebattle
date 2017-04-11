import React, { Component } from 'react';
import Header from '../Header/Header';
import UserContainer from '../User/UserContainer';
import OpponentContainer from '../Opponent/OpponentContainer';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.inProgress === false ? (
          <div>
            <Link to="/test">Test link</Link>
            <UserContainer />
            {/*<OpponentContainer />*/}
          </div>
          ) : (
            <span>loading...</span>
        )}
      </div>
    );
  }
}

export default App;
