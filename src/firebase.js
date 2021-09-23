import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChJaLCaNeolEzaNv8ZABVqnygCqbJWb3U",
  authDomain: "disney-plus-clone-3510a.firebaseapp.com",
  projectId: "disney-plus-clone-3510a",
  storageBucket: "disney-plus-clone-3510a.appspot.com",
  messagingSenderId: "576090497447",
  appId: "1:576090497447:web:8b635f297edd944dee9682",
  measurementId: "G-LTH8P7CX1Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
