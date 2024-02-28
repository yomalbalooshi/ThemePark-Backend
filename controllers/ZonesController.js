const { Zone } = require('../models')

const index = async (req, res) => {
  try {
    const zones = await Zone.find({}).populate('attractions')
    res.send(zones)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const zone = await Zone.findById(req.params.id).populate('attractions')
    res.send(zone)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  show
}
