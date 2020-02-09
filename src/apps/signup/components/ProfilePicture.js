import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import { imagesSchema, validate } from '../validations';
import { toBase64 } from '../helpers';
import StepBar from './common/StepBar';
import FormFooter from './common/FormFooter';

const ProfilePicture = ({
  signupInformation,
  updateData,
  saveAndContinue,
  next,
  goBack
}) => {
  return (
    <>
      <Container>
        <div className="step-2">
          <Row>
            <Col sm={4}>
              <StepBar />
            </Col>
            <Col sm={5}>
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
                        <span className="title">Upload Profile Image</span>
                        <img src={values.profile_picture ? values.profile_picture : "https://via.placeholder.com/100"} className="profile-picture-img" alt="profile" />
                        <label className="profile-picture-input btn btn-primary">
                          <input
                            onChange={async (e) => {
                              if(e.target.files[0]) {
                                const base64ProfileImage = await toBase64(e.target.files[0]);
                                setFieldValue('profile_picture', base64ProfileImage);
                              }
                            }}
                            type="file"
                            name="profile_picture"
                            accept="image/x-png,image/gif,image/jpeg"/>
                          Select a Photo
                        </label>
                      </div>
                      <p>TIPS: Make sire your photo is well-it and in focus, allow potential matches to see your eyes, avoid sunglasses</p>
                      <div className="d-flex flex-column">
                        <Button
                          className="btn-block"
                          disabled={!isValid}
                          variant="primary"
                          type="submit">
                          Continue
                        </Button>
                        <Button
                          className="btn-block btn-save"
                          variant="success"
                          onClick={() => saveAndContinue(values)}>
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
      </Container>
      <FormFooter />
    </>
  )
};

ProfilePicture.ProfilePicture = {
  signupInformation: PropTypes.object,
  saveAndContinue: PropTypes.func,
  updateData: PropTypes.func,
  nexta: PropTypes.func,
};

export default ProfilePicture;
