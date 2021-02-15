var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var knex = require('knex')
module.exports = knex(config);