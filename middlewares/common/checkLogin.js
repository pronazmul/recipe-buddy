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
      res.set('user', decoded._id)
      next()
    } catch (error) {}
  } else {
    next()
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
