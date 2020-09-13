import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrSstHWD5fZHPkbNN1J5IkCNPdayeM8x4",
    authDomain: "tinder-clone-1a925.firebaseapp.com",
    databaseURL: "https://tinder-clone-1a925.firebaseio.com",
    projectId: "tinder-clone-1a925",
    storageBucket: "tinder-clone-1a925.appspot.com",
    messagingSenderId: "23198969677",
    appId: "1:23198969677:web:aa6ce678514866015b9104",
    measurementId: "G-0DJCVSZ7RE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;