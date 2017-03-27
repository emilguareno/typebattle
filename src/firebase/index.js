import * as firebase from 'firebase';
class FirebaseService {
    initDatabase(){
        firebase.initializeApp({
            apiKey: "AIzaSyBMLx8-TBA6TH6np5JSThGDxLGzLO-nuBk",
            authDomain: "cobattleship.firebaseapp.com",
            databaseURL: "https://cobattleship.firebaseio.com",
            storageBucket: "cobattleship.appspot.com",
            messagingSenderId: "956794900976"
        });
    }
    getDatabase(){
        return firebase.database();
    }
}

export default (new FirebaseService());