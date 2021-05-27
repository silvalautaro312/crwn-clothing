import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6yFaaeozTO5V_LpzAZqM4DMy1XZ2phN0",
    authDomain: "crwn-db-1e6f0.firebaseapp.com",
    projectId: "crwn-db-1e6f0",
    storageBucket: "crwn-db-1e6f0.appspot.com",
    messagingSenderId: "1012623552261",
    appId: "1:1012623552261:web:ef7c790be669d0a2eb916c",
    measurementId: "G-S2ZNVVSCZR"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;