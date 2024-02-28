const { Schema } = require('mongoose')

const attractionSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    x: Number,
    y: Number,
    r: Number,
    image: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = attractionSchema
