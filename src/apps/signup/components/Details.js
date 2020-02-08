import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import StepBar from './common/StepBar';
import Select from 'react-select';
import { detailsSchema, validate } from '../validations';

const RELATIONSHIP_OPTIONS = [
  { label: 'Single, never married', value: 'single' },
  { label: 'Divorced', value: 'divorced' },
  { label: 'Widowed', value: 'widowed' },
];

const EDUCATION_OPTIONS = [
  { label: 'High School', value: 'high_school' },
  { label: 'Bachelor\'s Degree', value: 'bachelor_degree' },
  { label: 'Graduate Degree', value: 'graduate_degree' },
]

const Details = ({
  signupInformation,
  updateData,
  saveAndContinue,
  next,
  goBack
}) => {
  return (
    <div className="step-3">
      <Row>
        <Col xs={4}>
          <StepBar />
        </Col>
        <Col xs={5}>
          <h3>Your Details</h3>
          <Formik
            initialErrors={validate(signupInformation, detailsSchema)}
            validate={(values) => validate(values, detailsSchema)}
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
              isValid
            }) => {
              const inputProps = { onChange: handleChange };

              return (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="children">
                    <Form.Label>Do you have children?</Form.Label>
                    <Form.Check
                      {...inputProps}
                      checked={values.children === 'yes'}
                      id="children_yes"
                      name="children"
                      type="radio"
                      value="yes"
                      label="Yes"/>
                    <Form.Check
                      {...inputProps}
                      checked={values.children === 'no'}
                      id="children_no"
                      name="children"
                      type="radio"
                      value="no"
                      label="No"/>
                    <Form.Control
                      {...inputProps}
                      value={values.children_count}
                      name="children_count"
                      type="text"
                      placeholder="if yes, how many?" />
                  </Form.Group>
                  <Form.Group controlId="smoke">
                    <Form.Label>Do you smoke?</Form.Label>
                    <Form.Check
                      {...inputProps}
                      checked={values.smoke === 'yes'}
                      id="smoke_yes"
                      name="smoke"
                      type="radio"
                      value="yes"
                      label="Yes"/>
                    <Form.Check
                      {...inputProps}
                      checked={values.smoke === 'no'}
                      id="smoke_no"
                      name="smoke"
                      type="radio"
                      value="no"
                      label="No"/>
                    <Form.Check
                      {...inputProps}
                      checked={values.smoke === 'occasionally'}
                      id="smoke_occasionally"
                      name="smoke"
                      type="radio"
                      value="occasionally"
                      label="Occasionally"/>
                  </Form.Group>
                  <Form.Group controlId="smoke">
                    <Form.Label>Do you drink?</Form.Label>
                    <Form.Check
                      {...inputProps}
                      checked={values.drink === 'yes'}
                      id="drink_yes"
                      name="drink"
                      type="radio"
                      value="yes"
                      label="Yes"/>
                    <Form.Check
                      {...inputProps}
                      checked={values.drink === 'no'}
                      id="drink_no"
                      name="drink"
                      type="radio"
                      value="no"
                      label="No"/>
                    <Form.Check
                      {...inputProps}
                      checked={values.drink === 'occasionally'}
                      id="drink_occasionally"
                      name="drink"
                      type="radio"
                      value="occasionally"
                      label="Occasionally"/>
                  </Form.Group>
                  <Form.Group controlId="relationship_status">
                    <Select
                      defaultValue={RELATIONSHIP_OPTIONS.find(option => option.value === values.relationship_status)}
                      onChange={(selected) => {
                        setFieldValue('relationship_status', selected.value);
                      }}
                      options={RELATIONSHIP_OPTIONS}
                      placeholder="Relationship Status" />
                  </Form.Group>
                  <Form.Group controlId="education">
                    <Select
                      defaultValue={EDUCATION_OPTIONS.find(option => option.value === values.education)}
                      onChange={(selected) => {
                        setFieldValue('education', selected.value);
                      }}
                      options={EDUCATION_OPTIONS}
                      placeholder="Education" />
                  </Form.Group>
                  <div className="d-flex flex-column">
                    <Button disabled={!isValid} variant="primary" type="submit">
                      Continue
                    </Button>
                    <Button variant="success" onClick={() => saveAndContinue(values)}>
                      Save & Complete later
                    </Button>
                    <span className="text-center go-back"  onClick={goBack}>Click here to go back to the previous page</span>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </Col>
      </Row>
    </div>
  )
};

Details.ProfilePicture = {
  signupInformation: PropTypes.object,
  saveAndContinue: PropTypes.func,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default Details;
