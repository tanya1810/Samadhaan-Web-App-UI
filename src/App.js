import React, { useState } from "react";
import Landingpg from "./Views/Landingpg";
import Mainpg from "./Views/Main";
import Login from "./Views/Loginpg";
import Dashboard from "./Views/Dashboard";
import Complaints from "./Views/Complaints";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { firebaseAuthStateListener } from "./Fire/Auth";
import { myFirebase } from "./firebase";

function App() {
  const [user,setUser] = useState(null);
  console.log(user);

  myFirebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          {user ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/mainmenu">
          {user ? <Mainpg /> : <Redirect to="/login" />}
        </Route>
        <Route path="/complaints">
          {user ? <Complaints /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          {user ? <Redirect to="/mainmenu" /> : <Landingpg />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
