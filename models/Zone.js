const { Schema } = require('mongoose')

const zoneSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    openingTime: { type: String },
    closingTime: { type: String },
    x: Number,
    y: Number,
    r: Number,
    image: { type: String },
    attractions: [{ type: Schema.Types.ObjectId, ref: 'Attraction' }],
    fastLane: { type: Number },
    normal: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = zoneSchema
