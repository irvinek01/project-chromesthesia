const mongoose = require("mongoose");
const { Schema } = mongoose;

const trackSchema = new Schema({
  trackId: { type: String, required: true },
  artist: { type: String, required: true },
  title: { type: String, required: true },
  cover: { type: String },
  youtubeVidId: { type: String, required: true },
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
