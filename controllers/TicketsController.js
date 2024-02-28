const { Ticket, User } = require('../models')

const index = (async = async (req, res) => {
  const tickets = await Ticket.find({ user: req.params.userId }).populate(
    'zone'
  )
  res.send(tickets)
})

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

const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
    res.send(await ticket.deleteOne())
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
  delete: deleteTicket,
  index
}
