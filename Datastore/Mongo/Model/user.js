const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  occuptaion: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true
  },
  updatedAt: {
    type: Date,
    require: true
  }
})

module.exports = mongoose.model('Users', schema, 'users')