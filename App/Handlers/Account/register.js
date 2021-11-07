const bcrypt = require('bcrypt')

const service = require('../../../Services')

module.exports = async function register(req, res) {
  let userData = req.body 
  userData.password = bcrypt.hashSync(userData.password, 10)

  try {
    let newUser = await service.user.create(userData)
    return res.status(201).json({
      statusCode: 201,
      status: 'Created',
      result: {
        userId: newUser.id,
      },
      message: "Account Successfully Created"
    })
  } catch(error) {
    return res.status(409).json({
      statusCode: 409,
      status: 'Created',
      message: "Email has alsready been taken!"
    }) 
  }
}