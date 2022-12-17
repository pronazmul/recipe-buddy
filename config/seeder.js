const { mongooseConnection } = require('./db')
const { demoRecipies, demoUsers } = require('./data')

// Configuration
require('dotenv').config()
mongooseConnection()

//Models
const People = require('../models/People')
const Recepies = require('../models/Recepies')
const { randomValueFromArray } = require('../utilities/array')

// Import Data Seeder:
const importData = async () => {
  try {
    //Destroy All
    await People.deleteMany()
    await Recepies.deleteMany()

    //Import Users
    const usersArray = await People.create(demoUsers)
    const usersIds = usersArray.map((user) => user._id)

    //Import Recipies
    const preparedRecipies = demoRecipies.map((recipie) => ({
      ...recipie,
      user: randomValueFromArray(usersIds),
    }))
    await Recepies.insertMany(preparedRecipies)

    console.log('Data Inserted')
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}

// Destroy Data Seeder:
const destroyData = async () => {
  try {
    await People.deleteMany()
    await Recepies.deleteMany()

    console.log('Data Destroyed Successfully')
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`)
    process.exit(1)
  }
}

// Manage Seeder Command:
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
