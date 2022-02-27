import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';

const UnauthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Register />
      </Route>
    </Switch>
  );
};

export default UnauthenticatedRoutes;
