const mongoose = require('mongoose')
const { Zone } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createZones = async () => {
  let zones = [
    {
      name: 'Splash Kingdom',
      openingTime: '8:00',
      closingTime: '16:00',
      x: 100,
      y: 100
    },
    {
      name: 'Kidtopia',
      openingTime: '8:00',
      closingTime: '16:00',
      x: 100,
      y: 100
    },
    {
      name: 'Kingdom of Dreams',
      openingTime: '8:00',
      closingTime: '16:00',
      x: 100,
      y: 100
    },
    {
      name: 'Tropical Tides',
      openingTime: '8:00',
      closingTime: '16:00',
      x: 100,
      y: 100
    }
  ]

  await Zone.deleteMany({})
  console.log('Creating zones . . .')
  await Zone.insertMany(zones)
  console.log('Zones created!')

  mongoose.connection.close()
}

createZones()
