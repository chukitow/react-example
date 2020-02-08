import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { imagesSchema, validate } from '../validations';
import { toBase64 } from '../helpers';
import StepBar from './common/StepBar';

const StepTwo = ({
  signupInformation,
  updateData,
  saveAndContinue,
  next,
  goBack
}) => {
  return (
    <div className="step-2">
      <Row>
        <Col xs={4}>
          <StepBar />
        </Col>
        <Col xs={5}>
          <h3>Thanks for regestering! Just a few more steps to complete your profile.</h3>
          <Formik
            initialErrors={validate(signupInformation, imagesSchema)}
            validate={(values) => validate(values, imagesSchema)}
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
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="profile-picture-container d-flex justify-content-center align-items-center flex-column">
                    <h4>Upload Profile Image</h4>
                    <img src={values.profile_picture ? values.profile_picture : "https://via.placeholder.com/100"} className="profile-picture-img" alt="profile" />
                    <p>TIPS: Make sire your photo is well-it and in focus, allow potential matches to see your eyes, avoid sunglasses</p>
                    <label className="profile-picture-input btn btn-primary">
                      <input
                        onChange={async (e) => {
                          const base64ProfileImage = await toBase64(e.target.files[0]);
                          setFieldValue('profile_picture', base64ProfileImage);
                        }}
                        type="file"
                        name="profile_picture"
                        accept="image/x-png,image/gif,image/jpeg"/>
                      Select a Photo
                    </label>
                  </div>
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

StepTwo.StepTwo = {
  signupInformation: PropTypes.object,
  saveAndContinue: PropTypes.func,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default StepTwo;
