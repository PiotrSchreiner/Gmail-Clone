import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8yVdlrS5_a4dyP8RwbinR73T6af1Gq0Q",
  authDomain: "clone2-fcc3f.firebaseapp.com",
  projectId: "clone2-fcc3f",
  storageBucket: "clone2-fcc3f.appspot.com",
  messagingSenderId: "13620676850",
  appId: "1:13620676850:web:be497ab32077c8240b286b",
  measurementId: "G-FN84K0S7NL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
