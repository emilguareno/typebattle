import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootComponents from './root';
import FirebaseService from './firebase';
import { history, store } from './store';
const rootEl = document.getElementById('root');
import 'semantic-ui-css/semantic.css';
import './index.css';

FirebaseService.initDatabase();

ReactDOM.render(
  <Provider store={store}>
    <RootComponents history={history} />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp history={history} />
      </Provider>,
      rootEl
    );
  });
}