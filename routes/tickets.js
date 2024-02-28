const express = require('express')
const router = express.Router()

const ticketsCtrl = require('../controllers/TicketsController')
const middleware = require('../middleware')
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  ticketsCtrl.create
)

module.exports = router
