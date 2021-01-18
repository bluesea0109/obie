const express = require('express')
const router = express.Router()

const carrierRoute = require('./carrier.routes')

router.use('/carrier', carrierRoute)

module.exports = router
