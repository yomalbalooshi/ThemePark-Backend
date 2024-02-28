const mongoose = require('mongoose')
const { Zone, Attraction } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createAttractions = async () => {
  let zones = await Zone.find({})

  await Attraction.deleteMany({})
  console.log('Creating Attractions . . .')
  zones.forEach(async (zone) => {
    let attractions = []
    if (zone.name === 'Splash Kingdom') {
      attractions = [
        {
          name: 'SplashDown Falls',
          description:
            'A thrilling water slide that twists and turns before plunging into a refreshing pool below',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: 'WaveRunner Rapids',
          description:
            'Experience the excitement of riding the rapids on inflatable rafts through a series of splashing waves and currents.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: 'WaterWhirl Cove',
          description:
            ' family-friendly water playground with slides, fountains, and water cannons, perfect for kids of all ages to splash and play.',
          imageUrl: '',
          x: 100,
          y: 100
        }
      ]
    } else if (zone.name === 'Kidtopia') {
      attractions = [
        {
          name: `Tiny Explorers' Trail`,
          description:
            'A whimsical walkway filled with interactive play areas, perfect for sparking the imagination of young adventurers.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: 'Kiddie Carousel Cove',
          description:
            'A charming carousel featuring colorful, animal-shaped seats that spin gently for a delightful ride.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: 'FunZone Playland',
          description:
            'An indoor play area filled with climbing structures, ball pits, and slides, providing hours of fun for energetic kids.',
          imageUrl: '',
          x: 100,
          y: 100
        }
      ]
    } else if (zone.name === 'Kingdom of Dreams') {
      attractions = [
        {
          name: `Dragon's Lair Quest`,
          description:
            'Embark on a thrilling adventure through a medieval castle, complete with interactive challenges and encounters with mythical creatures.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: `Knight's Valor Arena`,
          description:
            'Witness epic battles and daring feats of skill as knights compete in jousting tournaments and sword fights.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: 'Royal Jousting Challenge',
          description:
            'Test your skills on horseback as you joust against opponents in a medieval tournament of champions.',
          imageUrl: '',
          x: 100,
          y: 100
        }
      ]
    } else if (zone.name === 'Tropical Tides') {
      attractions = [
        {
          name: `Seaside Serenity Spa`,
          description:
            'Relax and rejuvenate with a variety of spa treatments, from massages to facials, all while enjoying panoramic views of the beach.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: `Surf's Up Wave Pool`,
          description:
            'Experience the thrill of surfing on artificial waves in a controlled environment, perfect for surfers of all skill levels.',
          imageUrl: '',
          x: 100,
          y: 100
        },
        {
          name: 'Royal Jousting Challenge',
          description:
            'Join in on beach volleyball tournaments, sandcastle building contests, and other fun beach activities.',
          imageUrl: '',
          x: 100,
          y: 100
        }
      ]
    }

    const addedAttractions = await Attraction.insertMany(attractions)
    zone.attractions = addedAttractions
    await zone.save()
  })
  // mongoose.connection.close()
  console.log('Attractions created!')
}

createAttractions()
