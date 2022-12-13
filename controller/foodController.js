// External Module:
const createError = require('http-errors')

//Internal Module:
const Food = require('../models/Food')
const Recepies = require('../models/Recepies')

/**
 * @desc Create
 * @Route [POST]- /food
 * @Access protected - [admin]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let newData = new Recepies(req.body)
    await newData.save()
    res.status(200).json(newData)
  } catch (error) {
    // Check Mongoose Error
    if (error?._message) {
      let message = error?.message?.split(':').pop()
      next(createError(422, message))
    } else {
      next(createError(500, 'Failed to insert Data!'))
    }
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /food/:id
 * @Access protected - [admin]
 * @returns {Object}
 */
const getSingle = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = {}
    const data = await Recepies.findOne(query, projection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Failed to fetch Data By ID!'))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /food
 * @Access protected - [admin]
 * @returns {Array<JSON>}
 */
const getAll = async (req, res, next) => {
  try {
    const search = req.query.search
    const query = search ? { name: { $regex: search, $options: 'i' } } : {}
    let projection = {}
    const options = { sort: { id: 1 } }
    const data = await Recepies.find(query, projection, options)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Failed to fetch Data!'))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /food/:id
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const update = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
    }
    let updatedData = await Recepies.findOneAndUpdate(query, req.body, options)
    res.status(200).json(updatedData)
  } catch (error) {
    console.log({ error })
    next(createError(500, 'Failed to update Data'))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /food/:id
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteSingle = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let result = await Recepies.findByIdAndDelete(query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, 'Failed to delete data!'))
  }
}

//Export Module:
module.exports = {
  create,
  getSingle,
  getAll,
  update,
  deleteSingle,
}
