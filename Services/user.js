const repository = require('../Repository')

async function getUserByEmail(email) {
  let user = await repository.user.getUserByEmail(email)
  return user
}

async function getUserById(id) {
  let user = await repository.user.getUserById(id)
  return user
}

async function create(data) {
  let newData = await repository.user.save(data)
  return newData
}

module.exports = {
  create,
  getUserByEmail,
  getUserById,
}
