import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { history, store } from './store';
const rootEl = document.getElementById('root');
import 'semantic-ui-css/semantic.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp history={history} />
      </Provider>,
      rootEl
    );
  });
}