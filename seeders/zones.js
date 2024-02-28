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
      image: '/images/bluemap.svg',
      fastLane: 20,
      normal: 10,
      x: 365,
      y: 173,
      r: 19
    },
    {
      name: 'Kidtopia',
      openingTime: '8:00',
      closingTime: '16:00',
      image: '/images/greenmap.svg',
      fastLane: 30,
      normal: 15,
      x: 34,
      y: 235,
      r: 19
    },
    {
      name: 'Kingdom of Dreams',
      openingTime: '8:00',
      closingTime: '16:00',
      image: '/images/yellowmap.svg',
      fastLane: 25,
      normal: 15,
      x: 335,
      y: 400,
      r: 19
    },
    {
      name: 'Tropical Tides',
      openingTime: '8:00',
      closingTime: '16:00',
      image: '/images/pinkmap.svg',
      fastLane: 30,
      normal: 20,
      x: 403,
      y: 616,
      r: 19
    }
  ]

  await Zone.deleteMany({})
  console.log('Creating zones . . .')
  await Zone.insertMany(zones)
  console.log('Zones created!')

  mongoose.connection.close()
}

createZones()
