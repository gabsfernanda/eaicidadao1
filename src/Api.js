import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = firebaseApp.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    },
    facebookLogar: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }

} 
