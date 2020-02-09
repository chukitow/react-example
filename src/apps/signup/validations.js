import validatejs from 'validate.js';
import { pick } from 'lodash'
import { TARGET_OPTIONS } from './components/LookingFor';

export const introSchema = {
  gender: {
    presence: true,
  },
  gender_target: {
    presence: true,
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8
    }
  },
}

export const basicInfoSchema = {
  ...(pick(['gender', 'gender_target'], introSchema)),
  first_name: {
    presence: {
      allowEmpty: false
    },
  },
  last_initial: {
    presence: {
      allowEmpty: false
    }
  },
  age: {
    presence: {
      allowEmpty: false
    },
    type: 'integer'
  },
  location: {
    presence: {
      allowEmpty: false
    }
  },
};

export const imagesSchema = {
  profile_picture: {
    presence: true
  }
};

export const detailsSchema = {
  children: {
    presence: {
      allowEmpty: false
    }
  },
  smoke: {
    presence: {
      allowEmpty: false
    }
  },
  drink: {
    presence: true
  },
  relationship_status: {
    presence: true
  },
  education: {
    presence: true
  },
};

export const targetDetailsSchema = (
  () => TARGET_OPTIONS.reduce((acc, val) => ({
    ...acc,
    [val.name]: {
      presence: {
        allowEmpty: false
      }
    }
  }), [])
)();

const schema = {
  ...introSchema,
  ...basicInfoSchema,
  ...imagesSchema,
  ...detailsSchema,
  ...targetDetailsSchema
};

export const validate = validatejs;
export default (values) => validatejs(values, schema);
