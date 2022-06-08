import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import Profile from 'pages/ProfilePage';
import Chat from 'pages/Chat';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

const Routes = () => {
  const authenticated = useSelector((state: RootStateOrAny) => !!state.user.token);

  return (
    <Router>
      {!authenticated ? (
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      ) : (
        <UnauthenticatedRoutes />
      )}
    </Router>
  );
};
export default Routes;
