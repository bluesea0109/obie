const express = require('express')
const router = express.Router()
const controller = require('../controllers/carrier.controller')

router.get('/', controller.index)

module.exports = router
