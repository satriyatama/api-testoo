const uuid = require('uuid')
const luxon = require('luxon')

const model = require('../Datastore/Mongo/Model')

function save(data) {
  const id = uuid.v4()
  const dateTimeNow = luxon.DateTime.now().toString()
  const userData = {
    id,
    ...data,
    createdAt: dateTimeNow,
    updatedAt: dateTimeNow,
  }
  return model.user.create(userData)
}

function getUserByEmail(email) {
  return model.user.findOne({ email })
} 

function getUserById(id) {
  return model.user.findOne({ id })
} 

module.exports = {
  getUserByEmail,
  getUserById,
  save,
}