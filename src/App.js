import React from 'react';
import './App.css';
import landingpg from './web pages/landingpg';
import mainpg from './web pages/main';
import login from './web pages/loginpg';
import dashboard from './web pages/dashboard';
import complaints from './web pages/complaints';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component= {landingpg}  />
    <Route path="/mainmenu" component= {mainpg}  />
    <Route path="/login" component= {login}  />
    <Route path="/dashboard" component= {dashboard} />
    <Route path="/complaints" component= {complaints} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
