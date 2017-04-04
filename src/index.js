import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootComponents from './root';
import './index.css';
import FirebaseService from './firebase';
import store from './store';
const rootEl = document.getElementById('root');

FirebaseService.initDatabase();

ReactDOM.render(
  <Provider store={store}>
    <RootComponents />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
}