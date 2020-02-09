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
import BasicInfo from './components/BasicInfo';
import ProfilePicture from './components/ProfilePicture';
import Details from './components/Details';
import LookingFor from './components/LookingFor';
import { saveAndContinue as saveLocally, getSignupInformation } from './helpers';

const Signup = () => {
  const [signupInformation, setSignupInformation] = useState(getSignupInformation());
  const history = useHistory();
  const updateData = (values) => {
    const data = {
      ...signupInformation,
      ...values
    };
    setSignupInformation(data);
    return data;
  }

  const STEPS = {
    "/welcome": (props = {}) => <Welcome {...props}/>,
    "/step_1": (props = {}) => <BasicInfo {...props}/>,
    "/step_2": (props = {}) => <ProfilePicture {...props}/>,
    "/step_3": (props = {}) => <Details {...props}/>,
    "/step_4": (props = {}) => <LookingFor {...props}/>,
  };

  const goTo = (step) => {
    history.push(step);
  }

  const commonProps = {
    signupInformation,
    updateData,
  }

  const saveAndContinue = (values) => {
    saveLocally(updateData(values));
  }

  const stepsProps = {
    "/welcome": {
      next: () => goTo('/signup/step_1'),
    },
    "/step_1": {
      next: () => goTo('/signup/step_2'),
    },
    "/step_2": {
      next: () => goTo('/signup/step_3'),
      saveAndContinue,
      goBack: () => goTo('/signup/step_1'),
    },
    "/step_3": {
      next: () => goTo('/signup/step_4'),
      saveAndContinue,
      goBack: () => goTo('/signup/step_2'),
    },
    "/step_4": {
      next: () => goTo('/signup/step_5'),
      saveAndContinue,
      goBack: () => goTo('/signup/step_3'),
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
