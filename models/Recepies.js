const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const recepieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'People',
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    unit: String,
    weight: Number,
    category: String,
    water: Number,
    calories: Number,
    protein: Number,
    fat: Number,
    carbohydrate: Number,
    energy: Number,
    cholesterol: Number,
    sugars: Number,
    salt: Number,
    caloriesFromProtein: Number,
    caloriesFromFat: Number,
    caloriesFromCarbohydrate: Number,
    vitaminC: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

// Integrate MOngoose Unique Validoator Plugin
recepieSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

const Recepie = mongoose.model('recepie', recepieSchema)

module.exports = Recepie
