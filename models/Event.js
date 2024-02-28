const { Schema } = require('mongoose')

const eventSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    description: { type: String },
    date: { type: String },
    zone: { type: Schema.Types.ObjectId, ref: 'Zone' }
  },
  {
    timestamps: true
  }
)

module.exports = eventSchema
