const joi = require('joi')

module.exports = register = joi.object({
  header: joi.object().unknown(),
  body: joi.object({
    fullName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    passwordConfirmation: joi.any().valid(joi.ref('password')).required(),
    occupation: joi.string().required(),
    phone: joi.number().required(),
    city: joi.string().required(),
    country: joi.string().required(),
    gender: joi.string().required(),
  }).required(),
  query: joi.object().unknown(),
})
