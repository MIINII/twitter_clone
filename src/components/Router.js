import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from '../routes/Home';
import Auth from '../routes/Auth';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <Route exact ='/'>
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
