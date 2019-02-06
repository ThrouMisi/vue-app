const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  id: Number,
  name: String,
  description: String,
  isComplete: Boolean
})
module.exports = mongoose.model("todos", schema)
