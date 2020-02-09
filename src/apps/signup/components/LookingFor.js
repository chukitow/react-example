import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import StepBar from './common/StepBar';
import { targetDetailsSchema, validate } from '../validations';
import { get } from 'lodash';

export const TARGET_OPTIONS = [
  {
    label: 'Relationship Status',
    name: 'target_relationship_status',
    options: [
      {
        value: 'single',
        label: 'Single, never married',
      },
      {
        value: 'divorced',
        label: 'Divorced',
      },
      {
        value: 'widowed',
        label: 'Widowed',
      },
      {
        value: 'separated',
        label: 'Separated',
      },
      {
        value: 'no_preference',
        label: 'No preference',
      }
    ],
  },
  {
    label: 'Children',
    name: 'target_children',
    options: [
      {
        value: 'with_children',
        label: 'I would like them to have children'
      },
      {
        value: 'without_children',
        label: 'I would not like them to have children',
      },
      {
        value: 'no_preference',
        label: 'No preference',
      }
    ],
  },
  {
    label: 'Do you mind if they smoke?',
    name: 'target_smoke',
    options: [
      {
        value: 'smoke',
        label: 'I would prefer someone who smokes'
      },
      {
        value: 'no_smoke',
        label: 'I would not prefer someone who smokes'
      },
      {
        value: 'no_preference',
        label: 'No preference',
      }
    ],
  },
  {
    label: 'Do you mind if they drink?',
    name: 'target_drink',
    options: [
      {
        value: 'drink',
        label: 'I would prefer someone who drinks'
      },
      {
        value: 'no_drinks',
        label: 'I would not prefer someone who drinks'
      },
      {
        value: 'no_preference',
        label: 'No preference',
      }
    ],
  },
  {
    label: 'Education (please select all thay apply)',
    name: 'target_education',
    options: [
      {
        value: 'high_school',
        label: 'High School'
      },
      {
        value: 'associate_degree',
        label: 'Associate\'s dregree'
      },
      {
        value: 'bachelor_degree',
        label: 'Bachelor\'s dregree',
      },
      {
        value: 'master_degree',
        label: 'Master\'s dregree',
      },
      {
        value: 'doctoral_degree',
        label: 'Doctoral\'s dregree',
      },
      {
        value: 'no_preference',
        label: 'No preference',
      }
    ],
  },
  {
    label: 'Age (please select all that apply)',
    name: 'target_age',
    options: [
      {
        value: '50-59',
        label: '50-59'
      },
      {
        value: '60-69',
        label: '60-69',
      },
      {
        value: '75+',
        label: '75+'
      }
    ],
  },
]

const LookingFor = ({
  signupInformation,
  updateData,
  saveAndContinue,
  next,
  goBack
}) => {
  return (
    <div className="step-4">
      <Row>
        <Col xs={4}>
          <StepBar />
        </Col>
        <Col xs={5}>
          <h3>What are you looking for?</h3>
          <p>Please answer the following questions related to what you're seeking in a partner.</p>
          <Formik
            initialErrors={validate(signupInformation, targetDetailsSchema)}
            validate={(values) => validate(values, targetDetailsSchema)}
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
                  {
                    TARGET_OPTIONS.map(options => (
                      <Form.Group controlId={options.name} key={options.name}>
                        <Form.Label>{options.label}</Form.Label>
                        {options.options.map(option => (
                          <Form.Check
                            {...inputProps}
                            checked={get(values, options.name, []).includes(option.value)}
                            key={`${options.name}_${option.value}`}
                            id={`${options.name}_${option.value}`}
                            name={options.name}
                            type="checkbox"
                            value={option.value}
                            label={option.label}/>
                        ))}
                      </Form.Group>
                    ))
                  }
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

LookingFor.ProfilePicture = {
  signupInformation: PropTypes.object,
  saveAndContinue: PropTypes.func,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default LookingFor;
