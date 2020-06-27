import React, { useState } from "react";
import Landingpg from "./Views/Landingpg";
import Mainpg from "./Views/Main";
import Login from "./Views/Loginpg";
import Dashboard from "./Views/Dashboard";
import Complaints from "./Views/Complaints";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { firebaseAuthStateListener, firebaseLogin } from "./Fire/Auth";
import { myFirebase } from "./firebase";

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  
  myFirebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/mainmenu">
          {loggedIn ? <Mainpg /> : <Redirect to="/login" />}
        </Route>
        <Route path="/complaints">
          {loggedIn ? <Complaints /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
        {loggedIn ? <Redirect to="/mainmenu" /> : <Login />}
        </Route>
        <Route path="/" exact>
          {loggedIn ? <Redirect to="/mainmenu" /> : <Landingpg />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
