import React, { Component } from 'react';
import Header from '../Header/Header';
import UserContainer from '../User/UserContainer';
import { Link } from 'react-router-dom';
import Opponent from '../Opponent/Opponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.inProgress === false && this.props.auth ? (
            <div>
              <Link to="/test">Test link</Link>
              <UserContainer round={this.props.round} />
              {this.props.opponents.map((opponent) => {
                return <Opponent key={opponent.id} round={this.props.round} opponent={opponent}/>
              })}
            </div>
          ) : (
            <span>loading...</span>
        )}
      </div>
    );
  }
}

export default App;
