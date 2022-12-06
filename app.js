// External Dependencies
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const cookieParser = require('cookie-parser')
const moment = require('moment')
const morgan = require('morgan')

// Internal Dependencies:
const {
  notFoundHandler,
  errorHandler,
} = require('./middlewares/common/errorHandler')
const authRouter = require('./router/authRouter')
const foodRouter = require('./router/foodRouter')
const publicRouter = require('./router/publicRouter')

// Express Setup:
const app = express()
dotenv.config()

// Moment Set as application local for ejs engine:
app.locals.moment = moment

// Database Connection
mongoose
  .connect(process.env.MONGO_COMPASS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully Connected To Database!'))
  .catch((error) => console.log(error))

//   Request Parser
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set View Engine
app.set('view engine', 'ejs')

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Parse Cookie Data
app.use(cookieParser(process.env.COOKIE_SECRET))

// Routing Setup
app.use('/', publicRouter)
app.use('/auth', authRouter)
app.use('/food', foodRouter)

// Health Check
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }))

// Not Found Handler
app.use(notFoundHandler)

// Error Handler
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Application listening to port ${process.env.PORT}`)
})
