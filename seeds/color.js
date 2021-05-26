const db = require("../models");
const connectDb = require("../config/connectDb");
connectDb();

const colorSeed = [
  {
    id: "1",
    color: "Red",
    keyNote: "C Major",
    songList: ["1", "2", "3"],
    hexaDecValue: "#FF0000",
  },
  {
    id: "2",
    color: "Orange-Pink",
    keyNote: "G Major",
    songList: ["1", "2", "3"],
    hexaDecValue: "	#ff6f52",
  },
];

db.Color.deleteMany({})
  .then(() => db.Color.insertMany(colorSeed))
  .then((data) => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
