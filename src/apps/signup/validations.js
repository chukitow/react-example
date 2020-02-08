import validatejs from 'validate.js';
import { pick } from 'lodash'

export const welcomeSchema = {
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
  ...(pick(['gender', 'gender_target'], welcomeSchema)),
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
}

const schema = {
  ...welcomeSchema,
  ...basicInfoSchema,
  ...imagesSchema,
  ...detailsSchema
};

export const validate = validatejs;
export default (values) => validatejs(values, schema);
