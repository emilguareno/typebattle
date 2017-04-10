import firebase from 'firebase';
import CONFIG from './config.json';
firebase.initializeApp(CONFIG);
const database = firebase.database();

export default database;
export const auth = firebase.auth();
export const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
    github: new firebase.auth.GithubAuthProvider()
};