![bannar_800x300](https://user-images.githubusercontent.com/58470993/208312640-ae6040b9-e5cb-4e85-affc-2447161c3a67.jpg)

# Recipe Buddy

Ricipe Buddy we help people manage your diet by displaying nutritional facts such as, carbs, fat, protein, salt, and sugar in a recipe based on food ingredients in the recipe.

## Pages with Features:

- Home (Application Name, Navigation Bar)
- About Page (Information about web app, developer name)
- Register Page (Register New user to database, Data validation, data validation with minimum 6 digit passwrod required, Store password as Hashed format in database, Register with message, also Contain Navigation Bar)
- Login Page (Login user by username and passwrod, Login with message, Navigation Bar)
- Logout Feature (Logout with message)
- Add food page (Only available for logged in Users, Add Food Data validatin, Store creator ID in food Database, Navigation Bar)
- Search Food Page (Input field to srarch food by name)
- Update Food Feature (This feature is added dynamically, Only logged in user can see update and delete icon also only food creator can update and delete food, If Clicked delete button Are sure Alert Modal)
- List Food page (Display all Food LIst, Can add one or more food as meal, If select same food multiple time will increase quantity, also can increase/decrease quantity, Delete Food from meal, All food will be calculated in nutrition Chart)

## Pages with Features:

- `http://domain/food` will fetch all food form database in json Format.
- Implement Data Validation using YUP Schema while creating and updating food items.
- Implement Apis in `GET, POST, PATCH, DELETE` format for Create Read Update Delete Food Items

```js
//Retrive All Data
router.get('/', checkLogin, getAll)

//Retrive Single Data by ID
router.get('/:id', getSingle)

//Create Data
router.post('/', validateRequest(createFoodSchema), create)

//Update Data
router.patch('/:id', validateRequest(updateFoodSchema), update)

//Delete Data
router.delete('/:id', deleteSingle)
```

## Form Validtion

- Data Validation using Yup Validation Schema

```js
//User REgistration Schema:
yup.object().shape({
  firstName: yup.string().required('First Name is Required!'),
  lastName: yup.string().required('Last Name is Required!'),
  email: yup
    .string()
    .matches(email, 'Invalid Email Address!')
    .required('Email is Required!'),
  username: yup.string().required('User Name is Required!'),
  password: yup
    .string()
    .required('Password Is Required!')
    .min(6, 'Password Should be minimum 6 character long'),
})

//Add Food Schema:
yup.object().shape({
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
  salt: yup.number().optional().typeError('Salt Must Be Number'),
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
```

## Database Schema & ER Diagram

- That i used mongoDB as Database here i used mongoose Object Data Model (ODM) to make a blueprint of my data into Database.

```js
//User Data Blueprint
mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

//Food Data Blueprint
mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'People',
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    unit: String,
    weight: Number,
    category: String,
    water: Number,
    calories: Number,
    protein: Number,
    fat: Number,
    carbohydrate: Number,
    energy: Number,
    cholesterol: Number,
    sugars: Number,
    salt: Number,
    caloriesFromProtein: Number,
    caloriesFromFat: Number,
    caloriesFromCarbohydrate: Number,
    vitaminC: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)
```

- Entity RelationShip Diagram
  ![Recipe-Buddy -er](https://user-images.githubusercontent.com/58470993/208315937-3efde31f-8cdb-4b91-9a0a-601600fe5d87.png)

## Techonologies Used 🚀

- Nodejs (JavaScript Runtime)
- ExpressJS (Backend Framework)
- EJS (Template Engine)
- MongoDB (Document Oriented Database)
- Mongoose (MongoDB ODM)
- Yup (Data Validation Schema)
- jsonwebtoken (Auth token For Api Security)
- cookie-parser (Store and retirve data on Client side)
- Bcrypt (Store password in Hasehed Format)
