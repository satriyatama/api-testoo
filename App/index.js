const express = require("express")
const morgan = require("morgan")
const swaggerUI = require("swagger-ui-express")
const cors = require('cors')
const multer = require('multer')

const mongoDB = require('../Datastore/Mongo/client')
const config = require('../Config');
const docs = require('../Docs');
const routes = require('../Routes');

const app = express();
const upload = multer();

async function start() {
  await mongoDB.createClient().then(()=> {
    console.log('MongoDB Connected')
  }).catch(error => {
    console.log(error)
  })

  if (config.app.env == 'production') app.use(morgan('common'))
  else {
    app.use(morgan('dev'))
  }

  // Setting up View Engine For root
  app.set('view engine', 'ejs')
  app.set('views', './views')

  // for parsing application/json
  app.use(express.json('*/*'));
  // for parsing application/xwww-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // for parsing multipart/form-data
  app.use(upload.any());
  app.use(express.static('public'));

  app.use(cors({origin: config.cors.origin}))

  app.use(
    '/',
    routes.index
  )

  // Documentation Base Routes
  app.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(docs)
  )

  // Account Base Routes
  app.use(
    '/account',
    routes.account
  )

  app.listen(config.app.port || 5000, ()=> {
    console.log('Application Running on Port', config.app.port)
  });
}

async function stop() {
  await mongoDB.closeClient().then(()=>{
    console.log('MongoDB disconected')
  })

  process.exit(1)
}

module.exports = {
  start, stop
}