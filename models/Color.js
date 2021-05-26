const mongoose = require("mongoose");
const { Schema } = mongoose;

const trackSchema = new Schema({
  artist: { type: String, required: true },
  title: { type: String, required: true },
  album: { type: String },
  cover: { type: String },
  youtubeVidId: { type: String, required: true },
});

const colorSchema = new Schema({
  color: { type: String, required: true, unique: true },
  keyNote: { type: String, required: true },
  songList: { type: [trackSchema], required: true },
  hexaDecValue: { type: String, required: true },
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
