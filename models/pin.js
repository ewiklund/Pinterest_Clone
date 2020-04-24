const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PinSchema = new Schema({
  title: String,
  desc: String,
  username: String,
  path: String,
  isSave: Boolean
})

module.exports = mongoose.model("Pin", PinSchema);
