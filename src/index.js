require('@babel/polyfill');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./routes/');
dotenv.config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Routes definition
app.use('/api', router);
app.listen(process.env.PORT, ()=>{
    console.log(`Application running on port ${process.env.PORT}`);
})

module.exports = app;