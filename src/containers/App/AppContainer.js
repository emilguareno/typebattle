import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

AppContainer.propTypes = {
    auth: PropTypes.object
};

export default connect(({ firebase }) => {
    return {
        auth: pathToJS(firebase, 'auth') || null
    };
})(AppContainer)
