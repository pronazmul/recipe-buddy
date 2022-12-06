const yup = require('yup')
const { email, password } = require('./regexp')

const registrationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is Required!'),
  lastName: yup.string().required('Last Name is Required!'),
  email: yup
    .string()
    .matches(email, 'Invalid Email Address!')
    .required('Email is Required!'),
  username: yup.string().required('User Name is Required!'),
  password: yup
    .string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
})

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(email, 'Authentication Failed')
    .required('Email is Required!'),
  password: yup
    .string()
    .matches(password, 'Authentication Failed')
    .required('Password Is Required!'),
})

module.exports = {
  registrationSchema,
  loginSchema,
}
