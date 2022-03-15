import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';
import ForgotPassword from 'pages/ForgotPassword';
import ChangeForgottenPassword from 'pages/ChangeForgottenPassword';

const UnauthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/change-password/:token">
        <ChangeForgottenPassword />
      </Route>
      <Route path="/">
        <Register />
      </Route>
    </Switch>
  );
};

export default UnauthenticatedRoutes;
