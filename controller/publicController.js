// External Modules:
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

// Internal Modules:
const User = require('../models/People')

// Render Home Page
const getHomePage = (req, res, next) => {
  res.render('index')
}

// Render About Page
const getAboutPage = (req, res, next) => {
  res.render('about')
}

// Render Login Page
const getLoginPage = (req, res, next) => {
  res.render('login')
}

// render Register Page
const getRegisterPage = (req, res, next) => {
  res.render('register')
}

// Render Food List page
const getFoodList = (req, res, next) => {
  res.render('foodList')
}

// Render Add Food Page
const addFood = (req, res, next) => {
  res.render('addFood')
}

// Module Export
module.exports = {
  getHomePage,
  getAboutPage,
  getLoginPage,
  getRegisterPage,
  getFoodList,
  addFood,
}
