import firebase from "firebase";
import config from "./config";

export const myFirebase = firebase.initializeApp(config);
const baseDb = myFirebase.firestore();
export const db = baseDb;

export const messaging = myFirebase.messaging();
messaging.requestPermission()
.then(function(){
    console.log("have Permission");
    return messaging.getToken();
})
.then(function(Token){
  console.log(Token)  
})
.catch(function(error) {
   console.log("error occure");
}
)
