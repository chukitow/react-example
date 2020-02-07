import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Signup from './apps/signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Redirect to="/signup/welcome" />
      </Switch>
    </Router>
  );
}

export default App;
