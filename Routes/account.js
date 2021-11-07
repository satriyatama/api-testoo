const express = require('express')

const middleware = require('../App/Middlewares') // Middleware
const schema = require('../App/Schemas') // Schema
const handler = require('../App/Handlers') // Handler

const router = express.Router()

router.post(
  '/register',
  middleware.validation.schema(schema.account.register),
  handler.account.register
)

router.post(
  '/login',
  middleware.validation.schema(schema.account.login),
  handler.account.login
)

module.exports = router