const schemas = require('./Schemas')
const securitySchemes = require('./SecuritySchemes')

module.exports = {
  components:{
    ...schemas,
    ...securitySchemes,
  }
}