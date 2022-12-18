// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Modules
const {
  getHomePage,
  getAboutPage,
  getLoginPage,
  getRegisterPage,
  searchFoodPage,
  addFood,
  foodList,
} = require('../controller/publicController')

const {
  redirectLogin,
  checkLogin,
  redirectLogout,
} = require('../middlewares/common/checkLogin')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

//Home Page
router.get('/', decorateHtmlResponse('Home'), checkLogin, getHomePage)

//About Page
router.get('/about', decorateHtmlResponse('About'), checkLogin, getAboutPage)

//Login Page
router.get(
  '/login',
  decorateHtmlResponse('Login'),
  checkLogin,
  redirectLogin,
  getLoginPage
)

//Register Page
router.get(
  '/register',
  decorateHtmlResponse('Register'),
  checkLogin,
  redirectLogin,
  getRegisterPage
)

//Render Search Food Page
router.get(
  '/searchfood',
  decorateHtmlResponse('Search Food'),
  checkLogin,
  searchFoodPage
)

//Render Food List Page
router.get('/foodList', decorateHtmlResponse('Food List'), checkLogin, foodList)

//Redner Add Food List Page
router.get(
  '/addFood',
  decorateHtmlResponse('Add Food'),
  checkLogin,
  redirectLogout,
  addFood
)

// Module Export:
module.exports = router
