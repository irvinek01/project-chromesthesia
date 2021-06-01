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
    hexaDecValue: "#ff6f52",
    songList: [
      {
        artist: "Carly Rae Jepsen",
        title: "Call Me Maybe",
        album: "Kiss",
        cover: "https://img.discogs.com/qxigaiPrIdedBEpW_KSVqCyfGec=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4095880-1355080581-8327.jpeg.jpg",
        youtubeVidId: "fWNaR-rxAic",
    },
    
    {
        artist: "Outkast",
        title: "Hey Ya!",
        album: "Hey Ya!",
        cover: "https://img.discogs.com/xWf77f_7AGd5_vuuTUzWMLldCrU=/fit-in/600x929/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8166699-1456399192-3613.jpeg.jpg",
        youtubeVidId: "PWgvGjAhvIw",
    },
    
    {
        artist: "Taylor Swift",
        title: "We are never getting back together",
        album: "Red",
        cover: "https://img.discogs.com/1ijMkcVo0HGEzvi5QB0X6Ux0k0I=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4908661-1379124033-5481.jpeg.jpg",
        youtubeVidId: "WA4iX5D9Z64",
    },
    ],
  },
  {
    color: "Yellow",
    keyNote: "D Major",
    hexaDecValue: "#ffff00",
    songList: [
      {
        artist: "Lady Gaga",
        title: "Alejandro",
        album: "The Fame Monster",
        cover: "https://img.discogs.com/oFTwqLNEMA2d4IVdsQSZo43oSxo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2158786-1267837892.jpeg.jpg",
        youtubeVidId: "niqrrmev4mA",
    },
    
    {
        artist: "Rihanna",
        title: "Good Girl Gone Bad",
        album: "Disturbia",
        cover: "https://img.discogs.com/kn02nwB4F_KnE-TEWlQ8RYj1DZY=/fit-in/600x531/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4850924-1377488626-4438.jpeg.jpg",
        youtubeVidId: "E1mU6h4Xdxc",
    },
    
    {
        artist: "Kesha",
        title: "Cannibal",
        album: "Blow",
        cover: "https://img.discogs.com/cvOJYP8aCNg3DW2LYL5FGksOHdw=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3785679-1459584830-5541.jpeg.jpg",
        youtubeVidId: "CFWX0hWCbng",
    },
    ],
  },
  {
    color: "Green",
    keyNote: "A Major",
    hexaDecValue: "#00ff00",
    songList: [
      {
        artist: "Arctic Monkeys",
        title: "AM",
        album: "Do I wanna Know?",
        cover: "https://img.discogs.com/dCcoVMQ2IUgS_2eAnu9cENT5Hdw=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4883062-1474755308-2810.jpeg.jpg",
        youtubeVidId: "bpOSxM0rNPM",
    },
    
    {
        artist: "Beyonce",
        title: "B'Day",
        album: "Irreplaceable",
        cover: "https://img.discogs.com/EYKNt974eWPP47VhR2p45X94YrQ=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-778599-1414354278-8793.jpeg.jpg",
        youtubeVidId: "2EwViQxSJJQ",
    },
    
    {
        artist: "Elton John",
        title: "Greatest Hits",
        album: "Rocket Man",
        cover: "https://img.discogs.com/Aa16sr7hnFmgHB0YiNZBojOe3QU=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8398084-1460833604-9461.jpeg.jpg",
        youtubeVidId: "DtVBCG6ThDk",
    },
    ],
  },
  {
    color: "Purple-Violet",
    keyNote: "A Flat",
    hexaDecValue: "#800080",
    songList: [
      {
        artist: "Oasis",
        title: "(Whats the story?) Morning Glory",
        album: "Do I wanna Know?",
        cover: "https://img.discogs.com/us3_6FkIhYHLZDkEp5GRFPzZ34Y=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-371341-1262612300.jpeg.jpg",
        youtubeVidId: "bx1Bh8ZvH84",
    },
    
    {
        artist: "Beyonce",
        title: "Halo",
        album: "I am... Sasha Fierce",
        cover: "https://img.discogs.com/qlsOF7980Ell3oaJD8WMkYgXmWo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1540118-1229208917.jpeg.jpg",
        youtubeVidId: "bnVUHWCynig",
    },
    
    {
        artist: "Adele",
        title: "Someone like you",
        album: "21",
        cover: "https://img.discogs.com/9k_xeV7LGQu54acW5O5vJHDJzTY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14093916-1606978857-7761.jpeg.jpg",
        youtubeVidId: "hLQl3WQQoQ0",
    },
    ],
  },
  {
    color: "Blue",
    keyNote: "F sharp",
    hexaDecValue: "#0000ff",
    songList: [

{
  artist: "The Beatles",
  title: "Come Together",
  album: "Abbey Road",
  cover: "https://img.discogs.com/OnURySqQ8VzdRxOzztR2RxhD8kA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2607424-1298729076.jpeg.jpg",
  youtubeVidId: "45cYwDMibGo",
},

{
  artist: "Gotye",
  title: "Someone that I used to know",
  album: "Making Mirrors",
  cover: "https://img.discogs.com/rArChGQTKTW1xA2SrulFfTogryY=/fit-in/338x401/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6981637-1430930374-3335.jpeg.jpg",
  youtubeVidId: "8UVNT4wvIGY",
},

{
  artist: "Coldplay",
  title: "The Scientist",
  album: "A Rush of Blood to the Head",
  cover: "https://img.discogs.com/RqoU4J2z99LHhddjbZ8z9wMQBsg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-367315-1284410494.jpeg.jpg",
  youtubeVidId: "RB-RcX5DS5A",
},
    ],
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
