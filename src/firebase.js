import firebase from "firebase";
import firebaseConfig from "./config.js";

const firebaseApp = firebase.initializeApp({
  firebaseConfig,
});

const db = firebase.firestore();
firebase.
export { db };
