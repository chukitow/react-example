import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { basicInfoSchema, validate } from '../validations';
import StepBar from './common/StepBar';

const BasicInfo = ({
  signupInformation,
  updateData,
  next
}) => {
  return (
    <div className="step-1">
      <Row>
        <Col xs={4}>
          <StepBar />
        </Col>
        <Col xs={5}>
          <h3>Thanks for regestering! Just a few more steps to complete your profile.</h3>
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
                      <Col xs={4}>
                        <Form.Label>I am a...</Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Check
                          {...inputProps}
                          checked={values.gender === 'woman'}
                          id="gender_woman"
                          name="gender"
                          type="radio"
                          value="woman"
                          label="Woman"/>
                      </Col>
                      <Col xs={4}>
                        <Form.Check
                          {...inputProps}
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
                      <Col xs={4}>
                        <Form.Label>Seeking a...</Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Check
                          {...inputProps}
                          checked={values.gender_target === 'woman'}
                          id="gender_target_woman"
                          name="gender_target"
                          type='radio'
                          value="woman"
                          label="Woman"/>
                      </Col>
                      <Col xs={4}>
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
                  <Button disabled={!isValid} variant="primary" type="submit">
                    Continue
                  </Button>
                </Form>
              )
            }}
          </Formik>
        </Col>
      </Row>
    </div>
  )
};

BasicInfo.propTypes = {
  signupInformation: PropTypes.object,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default BasicInfo;
