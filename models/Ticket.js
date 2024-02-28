const { Schema } = require('mongoose')

const ticketSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    zone: { type: Schema.Types.ObjectId, ref: 'Zone' },
    numOfTickets: Number,
    ticketType: { type: String, enum: ['Fast Lane', 'Normal'] },
    total: { type: Number }
  },
  {
    timestamps: true
  }
)
