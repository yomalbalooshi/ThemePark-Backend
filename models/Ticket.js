const { Schema } = require('mongoose')

const ticketSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    zone: { type: Schema.Types.ObjectId, ref: 'Zone' },
    numOfTickets: Number
  },
  {
    timestamps: true
  }
)
