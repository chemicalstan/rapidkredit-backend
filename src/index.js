require('@babel/polyfill');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/');
// const knex = require('knex')
const db = require('./db/knex');
const {Model, ForeignKeyViolationError, ValidationError} = require('objection');
// Bind all Models to a knex instance.
Model.knex(db);
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Routes definition
app.use('/api', router);
app.listen(process.env.PORT, ()=>{
    console.log(`Application running on port ${process.env.PORT}`);
})

module.exports = app;