const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const peopleSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Integrate MOngoose Unique Validoator Plugin
peopleSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

const People = mongoose.model('People', peopleSchema)

module.exports = People
