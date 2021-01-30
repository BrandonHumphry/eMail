import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkZiujP02eDsVBAHmMdZ5yjvvUhJlBlmE",
  authDomain: "email-f9279.firebaseapp.com",
  projectId: "email-f9279",
  storageBucket: "email-f9279.appspot.com",
  messagingSenderId: "945199094750",
  appId: "1:945199094750:web:07b5c4729fa21a4a049b4f",
  measurementId: "G-5FXVRK28CJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
