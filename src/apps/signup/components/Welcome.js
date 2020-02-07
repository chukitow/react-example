import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { welcomeSchema, validate } from '../validations';

const Welcome = ({
  signupInformation,
  updateData,
  next
}) => {
  return (
    <div className="welcome-page">
      <div className="title d-flex justify-content-center align-items-center">
        <h2>
          Find your Next great love with the <br/>
          #1 dating site for seniors
        </h2>
      </div>
      <Row>
        <Col xs={6}>
          <Formik
            initialErrors={validate(signupInformation, welcomeSchema)}
            validate={(values) => validate(values, welcomeSchema)}
            onSubmit={(values) => {
              updateData(values);
              next();
            }}
            initialValues={signupInformation}>
            {
              ({
                values,
                handleChange,
                handleSubmit,
                isValid
              }) => {
                const inputProps = { onChange: handleChange };
                return (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="gender">
                      <Row>
                        <Col xs={6}>
                          <Form.Label>I am a...</Form.Label>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            id="gender_woman"
                            name="gender"
                            type="radio"
                            value="woman"
                            label="Woman"/>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            id="gende_man"
                            name="gender"
                            type="radio"
                            value="man"
                            label="Man"/>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group controlId="gender_target">
                      <Row>
                        <Col xs={6}>
                          <Form.Label>Seeking a...</Form.Label>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            id="gender_target_woman"
                            name="gender_target"
                            type='radio'
                            value="woman"
                            label="Woman"/>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            id="gender_target_man"
                            name="gender_target"
                            type='radio'
                            value="man"
                            label="Man"/>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Control
                        {...inputProps}
                        type="email"
                        placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Control
                        {...inputProps}
                        type="password"
                        placeholder="Create your password" />
                    </Form.Group>
                    <Button disabled={!isValid} variant="primary" type="submit">
                      Register
                    </Button>
                  </Form>
                )
              }
            }
          </Formik>
          <div className="terms-and-conditions">
            <p>By clicking above to register, you confirm that you agree to our <a href="#/">Terms and Conditions</a> and you have read and understood our <a href="#/">Privacy Policy</a></p>
          </div>
          <div>
            <p>Already registered? <a href="#/">Click here to log in</a></p>
          </div>
        </Col>
      </Row>
      <div className="footer d-flex justify-content-center">
        <span>ABOUT</span>
        <span>•</span>
        <span>SUCCESS STORIES</span>
        <span>•</span>
        <span>LOG IN</span>
      </div>
    </div>
  );
}

Welcome.propTypes = {
  signupInformation: PropTypes.object,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default Welcome;
