const yup = require('yup')

const createFoodSchema = yup.object().shape({
  name: yup.string().required('Food name is Required!'),
  typicalValueUnit: yup
    .string()
    .required('Typical Value Unit Name is Required!'),
  typicalValue: yup
    .number()
    .required('Typical Value is Required!')
    .typeError('Typical Value Must Be Number'),
  carbs: yup
    .number()
    .required('Carbs is Required!')
    .typeError('Carbs Must Be Number'),
  fat: yup
    .number()
    .required('Fat is Required!')
    .typeError('Fat Must Be Number'),
  protein: yup
    .number()
    .required('Protein is Required!')
    .typeError('Protein Must Be Number'),
  salt: yup
    .number()
    .required('Salt is Required!')
    .typeError('Salt Must Be Number'),
  sugar: yup
    .number()
    .required('Sugar is Required!')
    .typeError('Sugar Must Be Number'),
})

const updateFoodSchema = yup.object().shape({
  name: yup.string().optional(),
  typicalValueUnit: yup.string().optional(),
  typicalValue: yup
    .number()
    .optional()
    .typeError('Typical Value Must Be Number'),
  carbs: yup.number().optional().typeError('Carbs Must Be Number'),
  fat: yup.number().optional().typeError('Fat Must Be Number'),
  protein: yup.number().optional().typeError('Protein Must Be Number'),
  salt: yup.number().optional().typeError('Salt Must Be Number'),
  sugar: yup.number().optional().typeError('Sugar Must Be Number'),
})

module.exports = {
  createFoodSchema,
  updateFoodSchema,
}
