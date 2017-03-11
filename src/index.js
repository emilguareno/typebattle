import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const rootEl = document.getElementById('root');
const FIREBASE = firebase.initializeApp({
  apiKey: "AIzaSyBMLx8-TBA6TH6np5JSThGDxLGzLO-nuBk",
  authDomain: "cobattleship.firebaseapp.com",
  databaseURL: "https://cobattleship.firebaseio.com",
  storageBucket: "cobattleship.appspot.com",
  messagingSenderId: "956794900976"
});

ReactDOM.render(
  <App />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}