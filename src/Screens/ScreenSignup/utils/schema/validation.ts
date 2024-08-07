import * as yup from 'yup';

export const schema = yup.object().shape({
  // name: yup.string().required('Name is required'),

  email: yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  // phone: yup.string()
  //   .matches(/^\d+$/, 'Phone number should be digits only')
  //   .required('Phone number is required'),

  // username: yup.string().required('Username is required'),

  password: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]/, 'Password must contain at least one special character')
    .required('Password is required'),
});
