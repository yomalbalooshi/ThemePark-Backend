const { Ticket, User } = require('../models')

const create = async (req, res) => {
  try {
    const user = await User.findById(res.locals.payload.id)
    req.body.user = user

    const ticket = await Ticket.create(req.body)
    res.send(ticket)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create
}
