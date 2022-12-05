// External Modules:
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

// Internal Modules:
const User = require('../models/People')

// Get Home Page
const getHomePage = (req, res, next) => {
  res.render('index')
}

// Get About Page
const getAboutPage = (req, res, next) => {
  res.render('about')
}

// Get Login Page
const getLoginPage = (req, res, next) => {
  res.render('login')
}

// Get Home Page
const getRegisterPage = (req, res, next) => {
  res.render('register')
}

// Module Export
module.exports = { getHomePage, getAboutPage, getLoginPage, getRegisterPage }
