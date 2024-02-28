const express = require('express')
const router = express.Router()

const attractionCtrl = require('../controllers/AttractionsController')

router.get('/', attractionCtrl.index)
router.get('/:id', attractionCtrl.show)

module.exports = router
