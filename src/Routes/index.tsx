import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import Profile from 'pages/Profile';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

const Routes = () => {
  const authenticated = useSelector((state: RootStateOrAny) => !!state.user.token);

  return (
    <Router>
      {authenticated ? (
        <Switch>
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
