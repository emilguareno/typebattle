import * as firebase from 'firebase';
import CONFIG from './config.json';
class FirebaseService {
    initDatabase(){
        firebase.initializeApp(CONFIG);
    }
    getDatabase(){
        return firebase.database();
    }
}

export default (new FirebaseService());