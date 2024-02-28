const { Attraction } = require('../models')

const index = async (req, res) => {
  try {
    const attractions = await Attraction.find({})
    res.send(attractions)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id)
    res.send(attraction)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  show
}
