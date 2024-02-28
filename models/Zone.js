const { Schema } = require('mongoose')

const zoneSchema = new Schema(
  {
    name: { type: String },
    openingTime: { type: String },
    closingTime: { type: String },
    x: Number,
    y: Number,
    imageUrl: { type: String },
    attractions: [{ type: Schema.Types.ObjectId, ref: 'Attraction' }],
    price: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = zoneSchema
