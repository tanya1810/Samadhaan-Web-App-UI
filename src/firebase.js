import firebase from "firebase";
import config from "./config";

export const myFirebase = firebase.initializeApp(config);
const baseDb = myFirebase.firestore();
export const db = baseDb;

