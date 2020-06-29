import React, { useState, useEffect } from "react";
import Landingpg from "./Views/Landingpg";
import Mainpg from "./Views/Main";
import Login from "./Views/Loginpg";
import Dashboard from "./Views/Dashboard";
import Complaints from "./Views/Complaints";
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
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  });

  if (isLoading) {
    return <h1>Loading Screen</h1>;
  }

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

export default AppWrapper;
