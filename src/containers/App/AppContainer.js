import React, { Component } from 'react';
import { pathToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import App from './App';
import './App.css';

class AppContainer extends Component {
    render() {
        return (
          <div className="App">
			  {this.props.auth !== null &&
              	<App />
			  }
          </div>
        );
    }
}

export default connect(({ firebase }) => {
    return {
        auth: pathToJS(firebase, 'auth') || null
    };
})(AppContainer)
