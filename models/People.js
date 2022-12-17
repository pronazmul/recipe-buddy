const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

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
    versionKey: false,
  }
)

// Integrate MOngoose Unique Validoator Plugin
peopleSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

peopleSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
})

const People = mongoose.model('People', peopleSchema)

module.exports = People
