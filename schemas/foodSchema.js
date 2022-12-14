const yup = require('yup')

const createFoodSchema = yup.object().shape({
  water: yup.number().optional().typeError('Water Must Be Number'),
  calories: yup.number().optional().typeError('Calories Must Be Number'),
  protein: yup.number().optional().typeError('Protein Must Be Number'),
  fat: yup.number().optional().typeError('Fat Must Be Number'),
  carbohydrate: yup
    .number()
    .optional()
    .typeError('Carbohydrate Must Be Number'),
  cholesterol: yup.number().optional().typeError('Cholesterol Must Be Number'),
  sugars: yup.number().optional().typeError('Sugars Must Be Number'),
  caloriesFromProtein: yup
    .number()
    .optional()
    .typeError('Calories From Protein Must Be Number'),
  caloriesFromFat: yup
    .number()
    .optional()
    .typeError('Calories From Fat Must Be Number'),
  caloriesFromCarbohydrate: yup
    .number()
    .optional()
    .typeError('Calories From Carbohydrate Must Be Number'),
  energy: yup.number().optional().typeError('Energy Must be Numbers'),
  category: yup.string().required('Category is Required!'),
  weight: yup
    .number()
    .required('Weight is Required!')
    .typeError('Weight Must Be Number'),
  unit: yup.string().required('Recipe Unit is Required!'),
  name: yup.string().required('Recipe name is Required!'),
})

const updateFoodSchema = yup.object().shape({
  water: yup.number().optional().typeError('Water Must Be Number'),
  calories: yup.number().optional().typeError('Calories Must Be Number'),
  protein: yup.number().optional().typeError('Protein Must Be Number'),
  fat: yup.number().optional().typeError('Fat Must Be Number'),
  carbohydrate: yup
    .number()
    .optional()
    .typeError('Carbohydrate Must Be Number'),
  cholesterol: yup.number().optional().typeError('Cholesterol Must Be Number'),
  sugars: yup.number().optional().typeError('Sugars Must Be Number'),
  caloriesFromProtein: yup
    .number()
    .optional()
    .typeError('Calories From Protein Must Be Number'),
  caloriesFromFat: yup
    .number()
    .optional()
    .typeError('Calories From Fat Must Be Number'),
  caloriesFromCarbohydrate: yup
    .number()
    .optional()
    .typeError('Calories From Carbohydrate Must Be Number'),
  energy: yup.number().optional().typeError('Energy Must be Numbers'),
  category: yup.string().required('Category is Required!'),
  weight: yup
    .number()
    .required('Weight is Required!')
    .typeError('Weight Must Be Number'),
  unit: yup.string().required('Recipe Unit is Required!'),
  name: yup.string().required('Recipe name is Required!'),
})

module.exports = {
  createFoodSchema,
  updateFoodSchema,
}
