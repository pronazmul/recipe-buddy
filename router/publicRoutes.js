// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Modules
const {
  getHomePage,
  getAboutPage,
  getLoginPage,
  getRegisterPage,
} = require('../controller/publicController')

const { redirectLogin } = require('../middlewares/common/checkLogin')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

//Home Page
router.get('/', decorateHtmlResponse('Recipe Buddy'), getHomePage)

//About Page
router.get('/about', decorateHtmlResponse('About'), getAboutPage)

//Login Page
router.get('/login', decorateHtmlResponse('Login'), getLoginPage)

//Register Page
router.get('/register', decorateHtmlResponse('Register'), getRegisterPage)

// Module Export:
module.exports = router
