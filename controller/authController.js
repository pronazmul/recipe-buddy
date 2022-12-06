// External Modules:
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

// Internal Modules:
const User = require('../models/People')

// Get Login page
const getLogin = (req, res, next) => {
  res.render('index')
}

// User Login:
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (isValidPassword) {
        const userObject = {
          _id: user._id,
          username: user.username,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        }

        // Generate Token:
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        })

        // Set Cookies:
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        })

        res.status(200).json({ ...userObject, token })

        // Set Logged in user as local Identifier:
        // res.locals.loggedInUser = userObject
        // res.redirect('/inbox')
      } else {
        throw createError('Authentication failed')
      }
    } else {
      throw createError('Authentication failed')
    }
  } catch (error) {
    next(createError(401, error))
  }
}

//Register:
const register = async (req, res, next) => {
  try {
    let newUser
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    newUser = new User({
      ...req.body,
      password: hashedPassword,
    })
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    if (error?._message) {
      let message = error?.message?.split(':').pop()
      next(createError(422, message))
    } else {
      next(createError(500, error))
    }
  }
}

// Logout User:
const logout = (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME)
  res.status(200).json({ message: 'Logout Success!' })
}

// Module Export
module.exports = { login, register, logout }
