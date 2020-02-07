import validatejs from 'validate.js';

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

const schema = {
  ...welcomeSchema,
}

export const validate = validatejs;
export default (values) => validatejs(values, schema);
