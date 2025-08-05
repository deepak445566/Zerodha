const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  age: Number,
  price: Number,
  net: String,
  day: String,
});

const Holdings = mongoose.model("Holding", HoldingSchema);


module.exports = Holdings;
