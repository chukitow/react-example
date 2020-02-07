import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import 'apps/signup/style.scss';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';

const Signup = () => {
  const [signupInformation, updateData] = useState({});
  const history = useHistory();

  const STEPS = {
    "/step_1": (props = {}) => <Welcome {...props}/>,
  };

  const goTo = (step) => {
    history.push(step);
  }

  const commonProps = {
    signupInformation,
    updateData,
  }

  const stepsProps = {
    "/step_1": {
      next: () => goTo('/step_2'),
    }
  };

  const buildWizard = () =>
    Object.keys(STEPS).map(step => (
      <Switch key={step}>
        <Route path={step}>
          {STEPS[step]({ ...stepsProps[step], ...commonProps})}
        </Route>
      </Switch>
    ))

  return (
    <div className="signup">
      <Container>
        <div className="header">
          <h1>Silver Encounters</h1>
        </div>
        <Router basename="/signup">
          {buildWizard()}
          <Redirect to="/step_1" />
        </Router>
      </Container>
    </div>
  );
}

export default Signup;
