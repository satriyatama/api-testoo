const definition = require('./definition')
const servers = require('./servers')
const paths = require('./Paths')
const components = require('./Components')

module.exports = {
  ...definition,
  ...servers,
  ...paths,
  ...components
}