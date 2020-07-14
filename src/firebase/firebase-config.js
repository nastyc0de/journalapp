import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDYgoFBrsuCGjFms7PI9GFYHy06wcXcd34",
    authDomain: "journalapp-45452.firebaseapp.com",
    databaseURL: "https://journalapp-45452.firebaseio.com",
    projectId: "journalapp-45452",
    storageBucket: "journalapp-45452.appspot.com",
    messagingSenderId: "97769326122",
    appId: "1:97769326122:web:be9990df025b5e3169e553"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}