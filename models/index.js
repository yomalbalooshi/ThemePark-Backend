const mongoose = require('mongoose')
const userSchema = require('./User')
const zoneSchema = require('./Zone')
const attractionSchema = require('./Attraction')

const User = mongoose.model('User', userSchema)
const Zone = mongoose.model('Zone', zoneSchema)
const Attraction = mongoose.model('Attraction', attractionSchema)

module.exports = {
  User,
  Zone,
  Attraction
}
