const { Event } = require('../models')
const index = async (req, res) => {
  try {
    const events = await Event.find({}).populate('zone')
    res.send(events)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index
}
