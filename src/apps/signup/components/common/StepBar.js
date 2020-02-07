import React from 'react';
import { useLocation } from 'react-router-dom';
import cx from 'classnames';

const STEPS = [
  'BASIC INFO',
  'IMAGES',
  'DETAILS',
  'LOOKING FOR',
  'REVIEW'
];

const StepBar = () => {
  const location = useLocation();
  return (
    <div className="step-bar">
      {STEPS.map((step, index) => (
        <div key={step} className={cx('step', { active: location.pathname === `/step_${index + 1}` })}>
          <span>{index + 1}</span>
          <span>{step}</span>
          {
            index < STEPS.length - 1 &&
            <div className="divider" />
          }
        </div>
      ))}
    </div>
  );
};


export default StepBar;
