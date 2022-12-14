// External Dependencies:
const express = require('express')
const {
  getAll,
  getSingle,
  create,
  update,
  deleteSingle,
} = require('../controller/foodController')
const router = express.Router()

// Internal Modules
const { checkLogin } = require('../middlewares/common/checkLogin')
const validateRequest = require('../middlewares/validateRequest')
const { createFoodSchema, updateFoodSchema } = require('../schemas/foodSchema')

router.get('/', checkLogin, getAll)

router.get('/:id', getSingle)
router.post('/', checkLogin, validateRequest(createFoodSchema), create)
router.patch('/:id', validateRequest(updateFoodSchema), update)
router.delete('/:id', deleteSingle)

// Module Export:
module.exports = router
