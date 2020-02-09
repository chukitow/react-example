import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import { basicInfoSchema, validate } from '../validations';
import StepBar from './common/StepBar';
import FormFooter from './common/FormFooter';

const BasicInfo = ({
  signupInformation,
  updateData,
  next
}) => {
  return (
    <div>
      <Container>
        <div className="step-1">
          <Row>
            <Col sm={4}>
              <StepBar />
            </Col>
            <Col sm={5}>
              <div className="step-intro-header">Thanks for regestering! Just a few more steps to complete your profile.</div>
              <Formik
                initialErrors={validate(signupInformation, basicInfoSchema)}
                validate={(values) => validate(values, basicInfoSchema)}
                onSubmit={(values) => {
                  updateData(values);
                  next();
                }}
                initialValues={signupInformation}>
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    isValid,
                    errors
                }) => {
                  const inputProps = { onChange: handleChange };
                  return (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="gender">
                        <Row>
                          <Col sm={4}>
                            <Form.Label>I am a...</Form.Label>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              className="checbox-border"
                              checked={values.gender === 'woman'}
                              id="gender_woman"
                              name="gender"
                              type="radio"
                              value="woman"
                              label="Woman"/>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              className="checbox-border"
                              checked={values.gender === 'man'}
                              id="gender_man"
                              name="gender"
                              type="radio"
                              value="man"
                              label="Man"/>
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
                              className="checbox-border"
                              checked={values.gender_target === 'woman'}
                              id="gender_target_woman"
                              name="gender_target"
                              type='radio'
                              value="woman"
                              label="Woman"/>
                          </Col>
                          <Col sm={4}>
                            <Form.Check
                              {...inputProps}
                              className="checbox-border"
                              checked={values.gender_target === 'man'}
                              id="gender_target_man"
                              name="gender_target"
                              type='radio'
                              value="man"
                              label="Man"/>
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group controlId="first_name">
                        <Form.Control
                          {...inputProps}
                          value={values.first_name}
                          name="first_name"
                          type="text"
                          placeholder="First Name" />
                      </Form.Group>
                      <Form.Group controlId="last_initial">
                        <Form.Control
                          {...inputProps}
                          value={values.last_initial}
                          name="last_initial"
                          type="text"
                          placeholder="Last Initial" />
                      </Form.Group>
                      <Form.Group controlId="age">
                        <Form.Control
                          {...inputProps}
                          value={values.age}
                          name="age"
                          type="number"
                          placeholder="Age" />
                      </Form.Group>
                      <Form.Group controlId="hide_age">
                        <Form.Check
                          {...inputProps}
                          onChange={(e) => {
                            setFieldValue('hide_age', e.target.checked);
                          }}
                          checked={values.hide_age ? true : false}
                          name="hide_age"
                          type="checkbox"
                          label="Check this box to hide your age on your profile" />
                      </Form.Group>
                      <Form.Group controlId="location">
                        <Form.Control
                          {...inputProps}
                          value={values.location}
                          name="location"
                          type="text"
                          placeholder="Location" />
                      </Form.Group>
                      <Button
                        className="btn-block"
                        disabled={!isValid}
                        variant="primary"
                        type="submit">
                        Continue
                      </Button>
                    </Form>
                  )
                }}
              </Formik>
            </Col>
          </Row>
        </div>
      </Container>
      <FormFooter />
    </div>
  )
};

BasicInfo.propTypes = {
  signupInformation: PropTypes.object,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default BasicInfo;
