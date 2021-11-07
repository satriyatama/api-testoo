const config = require('../config')

const account = require('./account')

// Root 
const router = require('express').Router()


router.index = router.get('/', function(req,res) {
  let docs
  if (config.app.host === '0.0.0.0') {
    docs = 'https://api-testoo.herokuapp.com/docs'
  } else {
    docs = `http://${config.app.host}:${config.app.port}/docs`
  }
  res.render('index', {docs})
})

const index = router

module.exports = {
  index,
  account,
}