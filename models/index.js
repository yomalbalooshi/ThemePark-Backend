const mongoose = require('mongoose')
const userSchema = require('./User')
const zoneSchema = require('./Zone')
const attractionSchema = require('./Attraction')
const ticketSchema = require('./Ticket')

const User = mongoose.model('User', userSchema)
const Zone = mongoose.model('Zone', zoneSchema)
const Attraction = mongoose.model('Attraction', attractionSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = {
  User,
  Zone,
  Attraction,
  Ticket
}
