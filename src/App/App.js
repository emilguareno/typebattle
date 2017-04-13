import React, { Component } from 'react';
import UserContainer from '../User/UserContainer';
import { Link } from 'react-router-dom';
import Opponent from '../Opponent/Opponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.battle ? (
            <div>
              <Link to="/test">Test link</Link>
              <UserContainer {...this.props} />
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
