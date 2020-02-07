import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import 'apps/signup/style.scss';
import { Container } from 'react-bootstrap';
import Welcome from './components/Welcome';
import StepOne from './components/StepOne';

const Signup = () => {
  const [signupInformation, updateData] = useState({});
  const history = useHistory();

  const STEPS = {
    "/welcome": (props = {}) => <Welcome {...props}/>,
    "/step_1": (props = {}) => <StepOne {...props}/>,
  };

  const goTo = (step) => {
    history.push(step);
  }

  const commonProps = {
    signupInformation,
    updateData,
  }

  const stepsProps = {
    "/welcome": {
      next: () => goTo('/signup/step_1'),
    },
    "/step_1": {
      next: () => goTo('/signup/step_2'),
    },
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
        </Router>
      </Container>
    </div>
  );
}

export default Signup;
