import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoU5dRp6-CanvSbeHD31vTf3aFWv53qcg",
  authDomain: "g-mail-clone-b082c.firebaseapp.com",
  projectId: "g-mail-clone-b082c",
  storageBucket: "g-mail-clone-b082c.appspot.com",
  messagingSenderId: "15619713548",
  appId: "1:15619713548:web:2abaf563801e5d05d4dc29",
  measurementId: "G-C3NXE6NBJX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
