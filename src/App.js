import React, { useState, useEffect } from "react";
import Landingpg from "./Views/Landingpg";
import Mainpg from "./Views/Main";
import Login from "./Views/Loginpg";
import Dashboard from "./Views/Dashboard";
import Complaints from "./Views/Complaints";
import Departlist from "./Views/Departlist";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { firebaseAuthStateListener, firebaseLogin } from "./Fire/Auth";
import { myFirebase } from "./firebase";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import allReducers from "./store/reducers";
import thunk from "redux-thunk";
import * as userActions from "./store/actions/user";

const AppWrapper = () => {
  const store = createStore(allReducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(userActions.fetchCity(myFirebase.auth().currentUser.uid));
    }
  }, [loggedIn]);

  myFirebase.auth().onAuthStateChanged((user) => {
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
          {loggedIn ? <Dashboard /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/mainmenu">
          {loggedIn ? <Mainpg /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/complaints">
          {loggedIn ? <Complaints /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/transfer">
          {loggedIn ? <Departlist /> : <Redirect to="/Login" /> }
        </Route>
        <Route path="/Login">
          { loggedIn ? <Redirect to="/mainmenu" /> : <Login /> }
        </Route>
        <Route path="/" exact>
          { <Landingpg />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppWrapper;
