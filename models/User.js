const { Schema } = require('mongoose')

const userSchema = new Schema({
  name: String,
  passwordDigest: String
})

module.exports = userSchema
