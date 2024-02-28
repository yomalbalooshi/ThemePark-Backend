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
          name: 'Surf n Dine',
          description:
            "Dive into a culinary oasis at our water theme park's eating zone, where a delectable fusion of flavors meets the refreshing ambiance of water-side dining, creating a feast for the senses.",
          imageUrl: '/images/blue-1.png',
          x: 95,
          y: 195,
          r: 27
        },
        {
          name: 'WaveRunner Rapids',
          description:
            'Experience the excitement of riding the rapids on inflatable rafts through a series of splashing waves and currents.',
          imageUrl: '/images/blue3.png',
          x: 390,
          y: 325,
          r: 27
        },
        {
          name: 'Aqua Arena',
          description:
            'Make a splash and spike up the fun at our pool volleyball arena, where sun-soaked excitement and friendly competition collide for an exhilarating aquatic experience.',
          imageUrl: '/images/blue-2.png',
          x: 387,
          y: 145,
          r: 27
        }
      ]
    } else if (zone.name === 'Kidtopia') {
      attractions = [
        {
          name: `Bounceville Wonderland`,
          description:
            'Welcome to Bounceville Wonderland in Kidtopia, where laughter fills the air as children revel in the joyous magic of our vibrant jumping castle, creating unforgettable moments of boundless fun and adventure.',
          imageUrl: '/images/green-1.png',
          x: 47,
          y: 230,
          r: 27
        },
        {
          name: 'JumpQuack Oasis',
          description:
            'Step into the whimsical JumpQuack Oasis at Kidtopia, where the air is filled with giggles and quacks as children embark on a lively escapade of bouncing delight with our charming jumping ducks, creating a buoyant playground of laughter and playful excitement.',
          imageUrl: '/images/green-2.png',
          x: 340,
          y: 180,
          r: 27
        },
        {
          name: 'CircusFiesta Junction',
          description:
            'Welcome to CircusFiesta Junction in Kidtopia, where the air is filled with the joyful juggling antics of our whimsical clowns, creating a vibrant spectacle of laughter and merriment for all to enjoy.',
          imageUrl: '/images/green-3png.png',

          x: 343,
          y: 360,
          r: 27
        }
      ]
    } else if (zone.name === 'Kingdom of Dreams') {
      attractions = [
        {
          name: `Dragon's Lair Quest`,
          description:
            'Embark on a thrilling adventure through a medieval castle, complete with interactive challenges and encounters with mythical creatures.',
          imageUrl: '/images/yellow-1.png',
          x: 335,
          y: 400,
          r: 19
        },
        {
          name: `Ethereal Spin Kingdom`,
          description:
            'Embark on a captivating journey at the Ethereal Spin Kingdom in the Kingdom of Dreams Zone, where the grandeur of the Ferris Wheel unveils a panoramic spectacle, offering breathtaking views that transport visitors into a realm of enchantment, delight, and suspended time.',
          imageUrl: '/images/yellow2.png',
          x: 385,
          y: 130,
          r: 27
        },
        {
          name: 'ThrillRush Summit',
          description:
            'Prepare for an adrenaline-fueled adventure at ThrillRush Summit in the Kingdom of Dreams Zone, where the dynamic roller coaster takes center stage. With heart-pounding drops, exhilarating loops, and breathtaking twists, this roller coaster promises an electrifying ride through a realm of excitement and pulse-pounding thrills, creating an unforgettable experience for daredevils and thrill-seekers alike.',
          imageUrl: '/images/yellow3.png',
          x: 389,
          y: 310,
          r: 27
        }
      ]
    } else if (zone.name === 'Tropical Tides') {
      attractions = [
        {
          name: `IslandExplorer Odyssey`,
          description:
            'Explore the tropical wonders of Tropical Tides on the IslandExplorer Odyssey, a serene train ride through lush landscapes and coastal vistas, offering a relaxing journey amidst island beauty.',
          imageUrl: '/images/pink-1.png',
          x: 85,
          y: 245,
          r: 27
        },
        {
          name: `TropicTwist Coaster`,
          description:
            'Experience the rush of TropicTwist Coaster in Tropical Tides, where exhilarating loops and twists blend seamlessly with breathtaking ocean vistas, offering a thrilling ride through a tropical paradise.',
          imageUrl: '/images/pink-2.png',
          x: 375,
          y: 195,
          r: 27
        },
        {
          name: 'AquaBump Dash',
          description:
            'Dive into the fun-filled AquaBump Dash in Tropical Tides, where the excitement of bumper cars meets a refreshing aquatic twist. Navigate the watery arena, gleefully bumping and dodging amidst tropical surroundings, creating a splashing good time for all ages.',
          imageUrl: '/images/pink-3.png',
          x: 380,
          y: 376,
          r: 27
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
