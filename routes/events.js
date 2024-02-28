const express = require('express')
const router = express.Router()

const eventsCtrl = require('../controllers/EventsController')

router.get('/', eventsCtrl.index)

module.exports = router
