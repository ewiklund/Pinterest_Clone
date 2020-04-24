require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const ejs = require("ejs");
const engine = require("ejs-mate");
const fileUpload = require("express-fileupload");

const app = express();

mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', (err) => {
  if (err) {
    console.log("Error connecting to database:" .err);
  } else {
    console.log("Successfully connected to db");
  }});

// Middleware

  app.use(fileUpload());
  app.use(express.static(__dirname + '/public'));
  app.engine("ejs", engine);
  app.set("view engine", "ejs");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(morgan("dev"));

require("./routes/main")(app);
require("./routes/pins")(app);


app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("connected to port 3000");
  }
})
