const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    typicalValue: {
      type: Number,
      trim: true,
      required: true,
    },
    typicalValueUnit: {
      type: String,
      trim: true,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    salt: {
      type: Number,
      required: true,
    },
    sugar: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Integrate MOngoose Unique Validoator Plugin
foodSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food
