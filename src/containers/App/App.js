import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
import { toArray } from 'lodash';
import { connect } from 'react-redux';
import { battlePropTypes } from 'helpers/propTypes';
import BattleList from 'components/BattleList/BattleList';
import './App.css';

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

App.propTypes = {
    battles: PropTypes.arrayOf(battlePropTypes).isRequired
}

const firebaseWrapper = firebaseConnect()(App);

export default connect(({ firebase }) => {
    return {
        battles: toArray(pathToJS(firebase, 'profile/battles'))
    }
})(firebaseWrapper)
