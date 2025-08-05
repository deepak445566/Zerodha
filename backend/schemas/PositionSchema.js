const mongoose = require("mongoose");
const { Schema } = mongoose;

const PositionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Position = mongoose.model("Position", PositionSchema);


module.exports = Position;
