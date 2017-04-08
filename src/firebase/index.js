import firebase from 'firebase';
import CONFIG from './config.json';
firebase.initializeApp(CONFIG);
const database = firebase.database();

export default database;