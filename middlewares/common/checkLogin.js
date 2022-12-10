// External Modules:
const createError = require('http-errors')
const jwt = require('jsonwebtoken')

const checkLogin = (req, res, next) => {
  console.log(req.get('Referrer'))
  const cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null

  if (cookies) {
    try {
      const token = cookies[process.env.COOKIE_NAME]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded

      //   Pass User Information to Response Locals Varriable:
      if (res.locals.html) {
        res.locals.loggedInUser = decoded
      }
      next()
    } catch (error) {}
  } else {
    next()
    // if (res.locals.html) {
    //   res.redirect('/login')
    // } else {
    //   res.status(401).json({
    //     error: 'Authentication Failure!',
    //   })
    // }
  }
}

const redirectLogin = (req, res, next) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null
  if (!cookies) {
    next()
  } else {
    res.redirect('/addFood')
  }
}
const redirectLogout = (req, res, next) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null
  if (cookies) {
    next()
  } else {
    res.redirect('/login')
  }
}

// Module Export :
module.exports = { checkLogin, redirectLogin, redirectLogout }
