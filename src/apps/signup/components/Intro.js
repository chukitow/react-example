import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import { introSchema, validate } from '../validations';

const Intro = ({
  signupInformation,
  updateData,
  next
}) => {
  return (
    <Container>
      <div className="intro-page">
        <div className="title d-flex justify-content-center align-items-center">
          <span className="header text-center">
            Find your next great love with the <br/>
            <strong>#1 dating</strong> site for seniors
          </span>
        </div>
        <Row>
          <Col sm={6}>
            <Formik
              initialErrors={validate(signupInformation, introSchema)}
              validate={(values) => validate(values, introSchema)}
              onSubmit={(values) => {
                updateData({
                  ...signupInformation,
                  ...values
                });
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
                    <Form
                      className="intro-form"
                      onSubmit={handleSubmit}>
                      <Form.Group controlId="gender">
                        <Row>
                          <Col sm={4}>
                            <Form.Label>I am a...</Form.Label>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              checked={values.gender === 'woman'}
                              className="checbox-border"
                              id="gender_woman"
                              name="gender"
                              type="radio"
                              value="woman"
                              label="woman"/>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              className="checbox-border"
                              checked={values.gender === 'man'}
                              id="gende_man"
                              name="gender"
                              type="radio"
                              value="man"
                              label="man"/>
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group controlId="gender_target">
                        <Row>
                          <Col sm={4}>
                            <Form.Label>Seeking a...</Form.Label>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              checked={values.gender_target === 'woman'}
                              className="checbox-border"
                              id="gender_target_woman"
                              name="gender_target"
                              type='radio'
                              value="woman"
                              label="moman"/>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              checked={values.gender_target === 'man'}
                              className="checbox-border"
                              id="gender_target_man"
                              name="gender_target"
                              type='radio'
                              value="man"
                              label="man"/>
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group controlId="email">
                        <Form.Control
                          {...inputProps}
                          value={values.email}
                          type="email"
                          placeholder="Enter your email address" />
                      </Form.Group>
                      <Form.Group controlId="password">
                        <Form.Control
                          {...inputProps}
                          value={values.password}
                          type="password"
                          placeholder="Create your password" />
                      </Form.Group>
                      <Button
                        className="btn-block"
                        disabled={!isValid}
                        type="submit">
                        REGISTER
                      </Button>
                    </Form>
                  )
                }
              }
            </Formik>
            <div className="signup-footer">
              <div className="terms-and-conditions text-center">
                <p>By clicking above to register, you confirm that you agree to our <a href="#/">Terms and Conditions</a> and you have read and understood our <a href="#/">Privacy Policy</a></p>
              </div>
              <div className="sign-in text-center">
                <p>Already registered? <a href="#/">Click here to log in</a></p>
              </div>
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
    </Container>
  );
}

Intro.propTypes = {
  signupInformation: PropTypes.object,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default Intro;
