const db = require("../models");
const connectDb = require("../config/connectDb");
connectDb();

const colorSeed = [
  {
    color: "Red",
    keyNote: "C Major",
    hexaDecValue: "#FF0000",
    songList: [
      {
        artist: "Blink-182",
        title: "All The Small Things",
        album: "Enema Of The State",
        cover:
          "https://img.discogs.com/EYTSz_ZXKThR_PnEgcBl6M2cbMo=/fit-in/353x354/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-512511-1125963332.jpeg.jpg",
        youtubeVidId: "9Ht5RZpzPqw",
      },
      {
        artist: "Red Hot Chili Peppers",
        title: "Californication",
        album: "Californication",
        cover:
          "https://img.discogs.com/Y3FeOOrwLFRvqprO9bN0u3Q5Wyc=/fit-in/600x518/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-691020-1148211379.jpeg.jpg",
        youtubeVidId: "YlUKcNNmywk",
      },
      {
        artist: "Michael Jackson",
        title: "Smooth Criminal",
        album: "Bad 25",
        cover:
          "https://img.discogs.com/tYr8IEasFJ9l9DHjtT7Ymf-6FG4=/fit-in/600x576/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4043383-1543067400-5668.jpeg.jpg",
        youtubeVidId: "h_D3VFfhvs4",
      },
      {
        artist: "Mariah Carey",
        title: "We Belong Together",
        album: "The Emancipation of Mimi",
        cover:
          "https://img.discogs.com/LOzLs_vrRSBqo2Od7O9fO00m4UM=/fit-in/496x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2521244-1288551859.jpeg.jpg",
        youtubeVidId: "0habxsuXW4g",
      },
    ],
  },
  {
    color: "Orange-Pink",
    keyNote: "G Major",
    hexaDecValue: "	#ff6f52",
    songList: [],
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
