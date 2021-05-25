const mongoose = require("mongoose");

module.exports = () =>
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/chromesthesia_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
