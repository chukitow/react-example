import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Form, Row, Col, Button } from 'react-bootstrap';
import StepBar from './common/StepBar';
import { DETAILS_OPTIONS, EDUCATION_OPTIONS, RELATIONSHIP_OPTIONS } from './Details';
import { TARGET_OPTIONS } from './LookingFor';

const Review = ({
  signupInformation,
  goTo,
}) => {
  const [saving, setSaving] = useState(false);
  const saveAndSave = () => {
    setSaving(true);
    /* Mock API Request timing */
    setTimeout(() => {
      setSaving(false);
      goTo('/intro');
    }, 3000);
  }
  return (
    <div className="step-5">
      <Row>
        <Col xs={4}>
          <StepBar />
        </Col>
        <Col xs={5}>
          <div className="review">
            <h3>Basic Info</h3>
            <p>Name: <strong>{signupInformation.first_name} {signupInformation.last_initial}</strong></p>
            <p>Age: <strong>{signupInformation.age}</strong></p>
            <p>Location: <strong>{signupInformation.location}</strong></p>

            <Button onClick={() => goTo('/signup/step_1')}>EDIT SECTION</Button>
          </div>
          <div className="review">
            <img src={signupInformation.profile_picture} width="150" alt="profile_picture"/>
            <br/>
            <Button onClick={() => goTo('/signup/step_2')}>Change Image</Button>
          </div>
          <hr/>
          <div className="review">
            <h3>Your Details</h3>
            <Form.Group controlId="children">
              <Form.Label>Education</Form.Label>
              <Form.Check
                readOnly={true}
                checked={true}
                name="children"
                type="checkbox"
                label={EDUCATION_OPTIONS.find(o => o.value === signupInformation.education).label}/>
            </Form.Group>
            <Form.Group controlId="relationship_status">
              <Form.Label>Relationship Status</Form.Label>
              <Form.Check
                readOnly={true}
                checked={true}
                name="relationship_status"
                type="checkbox"
                label={RELATIONSHIP_OPTIONS.find(o => o.value === signupInformation.relationship_status).label}/>
            </Form.Group>
            <Form.Group controlId="children">
              <Form.Label>Do you have children?</Form.Label>
              <Form.Check
                readOnly={true}
                checked={true}
                name="children"
                type="checkbox"
                label={`${DETAILS_OPTIONS[signupInformation.children]}${signupInformation.children === 'yes' ? `, ${signupInformation.children_count}` : ''}`}/>
            </Form.Group>
            <Form.Group controlId="smoke">
              <Form.Label>Do you smoke?</Form.Label>
              <Form.Check
                readOnly={true}
                checked={true}
                name="smoke"
                type="checkbox"
                label={DETAILS_OPTIONS[signupInformation.smoke]}/>
            </Form.Group>
            <Form.Group controlId="drink">
              <Form.Label>Do you drink?</Form.Label>
              <Form.Check
                readOnly={true}
                checked={true}
                name="drink"
                type="checkbox"
                label={DETAILS_OPTIONS[signupInformation.drink]}/>
            </Form.Group>

            <Button onClick={() => goTo('/signup/step_3')}>EDIT SECTION</Button>
          </div>
          <hr />
          <div className="review">
            <h3>What You're Looking For</h3>
            {
              TARGET_OPTIONS.map(options => (
                <Form.Group controlId={options.name} key={options.name}>
                  <Form.Label>{options.label}</Form.Label>
                  {options.options.map(option => {
                    const checked = get(signupInformation, options.name, []).includes(option.value)
                    if(checked) {
                      return (
                        <Form.Check
                          readOnly={true}
                          checked={checked}
                          key={`${options.name}_${option.value}`}
                          id={`${options.name}_${option.value}`}
                          name={options.name}
                          type="checkbox"
                          value={option.value}
                          label={option.label}/>
                      );
                    }
                  })}
                </Form.Group>
              ))
            }
            <Button onClick={() => goTo('/signup/step_4')}>EDIT SECTION</Button>
          </div>

          <div className="save-profile">
            <Button disabled={saving} onClick={saveAndSave}>SAVE & SEE MY PROFILE</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
};

Review.ProfilePicture = {
  signupInformation: PropTypes.object,
  goTo: PropTypes.func,
};

export default Review;
