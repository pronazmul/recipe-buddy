// External Dependencies:
const express = require('express')
const { register, login, logout } = require('../controller/authController')
const router = express.Router()

// Internal Modules
const { addUser } = require('../controller/userController')
const { checkLogin } = require('../middlewares/common/checkLogin')
const validateRequest = require('../middlewares/validateRequest')
const { registrationSchema } = require('../schemas/userSchema')

router.post('/register', validateRequest(registrationSchema), register)
router.post('/login', login)
router.delete('/logout', logout)

// Module Export:
module.exports = router
