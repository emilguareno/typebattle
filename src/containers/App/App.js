import React, { Component } from 'react';
import { firebaseConnect, pathToJS, populatedDataToJS } from 'react-redux-firebase';
import { isObject, toArray } from 'lodash';
import { connect } from 'react-redux';
import BattleList from '../../components/BattleList/BattleList';
import './App.css';

let battlesPath;

class App extends Component {
    render() {
        return (
          <div className="App">
              {this.props.battles &&
                <BattleList battles={this.props.battles} />
              }
          </div>
        );
    }
}

function parsePopulatedData(obj){
    return toArray(obj && obj.battles).filter(isObject);
}

const populates = [
  { child: 'battles', root: 'battles' }
]

const firebaseWrapper = firebaseConnect(
  () => ([
    { path: battlesPath, populates }
]))(App);

export default connect(({ firebase }) => {
    const auth = pathToJS(firebase, 'auth');
    battlesPath = `users/${auth.uid}`;
    const populatedBattles = populatedDataToJS(firebase, battlesPath, populates);
    const battles = parsePopulatedData(populatedBattles);
    return {
        battles: battles
    }
})(firebaseWrapper)
