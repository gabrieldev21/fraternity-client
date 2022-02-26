import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Registerv2 from 'pages/Registerv2';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/v2/register">
          <Registerv2 />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
