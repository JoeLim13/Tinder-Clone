import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0fpZsU1gPRXdyxpXNuN_QPeb1TcwLvJI",
  authDomain: "tinder-clone-675fe.firebaseapp.com",
  projectId: "tinder-clone-675fe",
  storageBucket: "tinder-clone-675fe.appspot.com",
  messagingSenderId: "977664123624",
  appId: "1:977664123624:web:3c84f3a1f6d20168ffdf5d",
  measurementId: "G-QKG2FZL92E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
