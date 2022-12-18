// External Modules:
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

// Internal Modules:
const User = require('../models/People')
const Food = require('../models/Food')
const Recepies = require('../models/Recepies')

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

// Render Search food Page
const searchFoodPage = async (req, res, next) => {
  const filter = req.query.filter
  const query = filter ? { name: { $regex: filter, $options: 'i' } } : {}
  const foods = await Recepies.find(query)
  res.locals.data = foods
  res.render('searchFood')
}

// Render Food List page
const foodList = async (req, res, next) => {
  const filter = req.query.filter
  const query = filter ? { name: { $regex: filter, $options: 'i' } } : {}
  const foods = await Recepies.find(query)
  res.locals.data = foods
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
  searchFoodPage,
  addFood,
  foodList,
}
