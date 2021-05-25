const mongoose = require("mongoose");
const { Schema } = mongoose;

const colorSchema = new Schema({
  id: { type: String, required: true },
  color: { type: String, required: true },
  keyNote: { type: String, required: true },
  songList: { type: [Number], required: true },
  hexaDecValue: { type: String, required: true },
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
