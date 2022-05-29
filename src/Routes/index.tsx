import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import Home from 'pages/Home';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

const Routes = () => {
  const authenticated = useSelector((state: RootStateOrAny) => !!state.user.token);

  return (
    <Router>
      {!authenticated ? (
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      ) : (
        <UnauthenticatedRoutes />
      )}
    </Router>
  );
};
export default Routes;
