const mongoose = require('mongoose')
const { Zone, Event } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createEvents = async () => {
  let zones = await Zone.find({})
  await Event.deleteMany({})
  console.log('Creating Events . . .')
  zones.forEach(async (zone) => {
    let events = []
    if (zone.name === 'Splash Kingdom') {
      events = [
        {
          name: 'Surfer Mania',
          image: '/images/icon2.png',
          description:
            'Embark on an exciting adventure into the world of wave-riding at our Surfer Mania event, scheduled for the 23rd of April 2024, in the invigorating setting of a water park.',
          date: '01/02/2024',
          zone: zone
        }
      ]
    } else if (zone.name === 'Kingdom of Dreams') {
      events = [
        {
          name: 'Characters meet n greet',
          image: '/images/icon3.png',
          description:
            'Embark on an enchanting journey into the realm of animated wonders at our "Characters Meet N Greet" event, scheduled for the 1st of February 2024 in the captivating setting of a theme park.',
          date: '01/02/2024',
          zone: zone
        },
        {
          name: 'Cake eating contest',
          image: '/images/icon-1.png',
          description:
            'Indulge your sweet tooth and embrace the delicious excitement of our Cake Eating Contest, taking place on the 1st of February 2024 within the lively atmosphere of a theme park',
          date: '01/02/2024',
          zone: zone
        }
      ]
    }

    await Event.insertMany(events)
  })
  // mongoose.connection.close()
  console.log('Events created!')
}
createEvents()
