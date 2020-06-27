import { myFirebase } from "../firebase";

export const firebaseAuthStateListener = () => {
  myFirebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  });
};

export const firebaseLogin = async (username, password) => {
   await myFirebase
    .auth()
    .signInWithEmailAndPassword(username.toString(), password.toString());
    // .catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorMessage);
    //   // ...
    // });
};

export const firebaseLogout = async () => {
  await myFirebase
    .auth()
    .signOut()
    .catch(function (error) {
      alert(error);
    });
};
