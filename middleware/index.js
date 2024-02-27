const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALH_ROUNDS = parseInt(process.env.SALH_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  return await bcrypt.hash(password, SALH_ROUNDS)
}

const comparePassword = async (password, storedPassword) => {
  return await bcrypt.compare(password, storedPassword)
}

const createToken = (payload) => {
  return jwt.sign(payload, APP_SECRET)
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      res.locals.payload = payload
      return next()
    }

    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Verify Token Error!' })
  }
}

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Verify Token Error!' })
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  verifyToken,
  stripToken
}
