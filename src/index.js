import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import './index.css';
import FirebaseService from './firebase';
import store from './store';
const rootEl = document.getElementById('root');

FirebaseService.initDatabase();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App/App', () => {
    const NextApp = require('./App/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
}