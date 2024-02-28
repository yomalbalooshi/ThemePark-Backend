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
      description:
        "Dive into a world of excitement at Splash Kingdom, where thrilling water slides, lazy rivers, and splash pads await. Whether you're seeking an adrenaline rush or a relaxing soak, this zone offers fun for the whole family",
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
      description:
        'Designed with our youngest guests in mind, Kidtopia is a magical place where imagination knows no bounds. With interactive play areas, gentle rides, and enchanting attractions, children can explore, learn, and create lasting memories',
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
      description:
        'Step into the Kingdom of Dreams and experience a realm where fairy tales come to life. From majestic castles to whimsical characters, this zone is a feast for the senses, offering enchanting shows, captivating performances, and fantastical adventures',
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
      description:
        'Relax and unwind at Tropical Tides, a paradise getaway within our theme park. Lounge by the pool, take a leisurely stroll along the beach, or enjoy a refreshing drink at the tiki bar. With its laid-back atmosphere and tropical charm, this zone is the perfect oasis for a day of relaxation',
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
