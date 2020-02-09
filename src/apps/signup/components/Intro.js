import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { introSchema, validate } from '../validations';

const Intro = ({
  signupInformation,
  updateData,
  next
}) => {
  return (
    <div className="intro-page">
      <div className="title d-flex justify-content-center align-items-center">
        <h2>
          Find your Next great love with the <br/>
          #1 dating site for seniors
        </h2>
      </div>
      <Row>
        <Col xs={6}>
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
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="gender">
                      <Row>
                        <Col xs={6}>
                          <Form.Label>I am a...</Form.Label>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            checked={values.gender === 'woman'}
                            id="gender_woman"
                            name="gender"
                            type="radio"
                            value="woman"
                            label="Woman"/>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            checked={values.gender === 'man'}
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
                            checked={values.gender_target === 'woman'}
                            id="gender_target_woman"
                            name="gender_target"
                            type='radio'
                            value="woman"
                            label="Woman"/>
                        </Col>
                        <Col xs={3}>
                          <Form.Check
                            {...inputProps}
                            checked={values.gender_target === 'man'}
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

Intro.propTypes = {
  signupInformation: PropTypes.object,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default Intro;