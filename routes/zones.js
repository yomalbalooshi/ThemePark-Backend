const express = require('express')
const router = express.Router()

const zonesCtrl = require('../controllers/ZoneController')

router.get('/', zonesCtrl.index)
router.get('/:id', zonesCtrl.show)

module.exports = router
