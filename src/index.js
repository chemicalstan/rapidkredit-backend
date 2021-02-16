require("@babel/polyfill");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = require("./routes/");
// const knex = require('knex')
const db = require("./db/knex");
const {
  Model,
  ForeignKeyViolationError,
  ValidationError
} = require("objection");
// Bind all Models to a knex instance.
Model.knex(db);
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes definition
app.use("/api", router);
//The 404 Route (ALWAYS Keep this as the last route)
app.use("*", function(req, res) {
  res.status(404).send({ status: "error", message: "Page not found" });
});
app.listen(process.env.PORT, () => {
  console.log(`Application running on port ${process.env.PORT}`);
});

module.exports = app;
