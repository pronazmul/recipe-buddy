// External Dependencies:
const createError = require('http-errors')

// 404 Not Found Handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Your request content was not found!'))
}

//Default Error Handler
const errorHandler = (error, req, res, next) => {
  const errorMessage =
    process.env.NODE_ENV === 'production'
      ? { message: error.message }
      : { message: error.message, stack: error.stack }

  res.status(error.status || 500).json(errorMessage)
}

// Module Export
module.exports = {
  notFoundHandler,
  errorHandler,
}
