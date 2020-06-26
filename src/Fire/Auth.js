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

export const firebaseLogin = (username, password) => {
  myFirebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
};

export const firebaseLogout = () => {
  myFirebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      alert(error);
    });
};
