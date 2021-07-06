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
      {
        artist: "Cyndi Lauper",
        title: "Time After Time",
        album: "She's So Unusual",
        cover:
          "https://img.discogs.com/i-0m9WW_Sl5ebkSYsLZ-bJdBKUc=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-208008-1473061364-7141.jpeg.jpg",
        youtubeVidId: "VdQY7BusJNU",
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
        cover:
          "https://img.discogs.com/qxigaiPrIdedBEpW_KSVqCyfGec=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4095880-1355080581-8327.jpeg.jpg",
        youtubeVidId: "fWNaR-rxAic",
      },
      {
        artist: "Outkast",
        title: "Hey Ya!",
        album: "Hey Ya!",
        cover:
          "https://img.discogs.com/xWf77f_7AGd5_vuuTUzWMLldCrU=/fit-in/600x929/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8166699-1456399192-3613.jpeg.jpg",
        youtubeVidId: "PWgvGjAhvIw",
      },
      {
        artist: "Taylor Swift",
        title: "We Are Never Ever Getting Back Together",
        album: "Red",
        cover:
          "https://img.discogs.com/1ijMkcVo0HGEzvi5QB0X6Ux0k0I=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4908661-1379124033-5481.jpeg.jpg",
        youtubeVidId: "WA4iX5D9Z64",
      },
      {
        artist: "The All-​American Rejects",
        title: "Swing Swing",
        album: "The All-​American Rejects",
        cover:
          "https://img.discogs.com/fw4g8bkRxMW_q7Ei9bSwbuM3hOg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14826470-1582356199-8805.jpeg.jpg",
        youtubeVidId: "KtypSRcwIhA",
      },
      {
        artist: "Green Day",
        title: "Wake Me Up When September Ends",
        album: "American Idiot",
        cover:
          "https://img.discogs.com/91yrhCwekZJM1tyvYOz2zeY6y94=/fit-in/600x454/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-627725-1436252157-5976.jpeg.jpg",
        youtubeVidId: "NU9JoFKlaZ0",
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
        cover:
          "https://img.discogs.com/oFTwqLNEMA2d4IVdsQSZo43oSxo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2158786-1267837892.jpeg.jpg",
        youtubeVidId: "niqrrmev4mA",
      },
      {
        artist: "Rihanna",
        title: "Disturbia",
        album: "Good Girl Gone Bad",
        cover:
          "https://img.discogs.com/kn02nwB4F_KnE-TEWlQ8RYj1DZY=/fit-in/600x531/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4850924-1377488626-4438.jpeg.jpg",
        youtubeVidId: "E1mU6h4Xdxc",
      },
      {
        artist: "Kesha",
        title: "Blow",
        album: "Cannibal",
        cover:
          "https://img.discogs.com/cvOJYP8aCNg3DW2LYL5FGksOHdw=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3785679-1459584830-5541.jpeg.jpg",
        youtubeVidId: "CFWX0hWCbng",
      },
      {
        artist: "Ed Sheeran",
        title: "Thinking Out Loud",
        album: "X",
        cover:
          "https://img.discogs.com/P3CIh-haswN3pf2j34YlINULgm0=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8960540-1472299735-4930.jpeg.jpg",
        youtubeVidId: "lp-EO5I60KA",
      },
      {
        artist: "Adele",
        title: "Send My Love (To Your New Lover)",
        album: "25",
        cover:
          "https://img.discogs.com/eu3OIP7zMkPMN1k4NdIKkbdzIvQ=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7743647-1523176920-9114.jpeg.jpg",
        youtubeVidId: "fk4BbF7B29w",
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
        title: "Do I wanna Know?",
        album: "AM",
        cover:
          "https://img.discogs.com/dCcoVMQ2IUgS_2eAnu9cENT5Hdw=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4883062-1474755308-2810.jpeg.jpg",
        youtubeVidId: "bpOSxM0rNPM",
      },

      {
        artist: "Beyonce",
        title: "Irreplaceable",
        album: "B'Day",
        cover:
          "https://img.discogs.com/EYKNt974eWPP47VhR2p45X94YrQ=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-778599-1414354278-8793.jpeg.jpg",
        youtubeVidId: "2EwViQxSJJQ",
      },

      {
        artist: "Elton John",
        title: "Rocket Man",
        album: "Greatest Hits",
        cover:
          "https://img.discogs.com/Aa16sr7hnFmgHB0YiNZBojOe3QU=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8398084-1460833604-9461.jpeg.jpg",
        youtubeVidId: "DtVBCG6ThDk",
      },
      {
        artist: "A-ha",
        title: "Take On Me",
        album: "Hunting High and Low",
        cover:
          "https://img.discogs.com/hjnT8pSBk9e-IKvG2uJ4p_mswEQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-322188-1156582944.jpeg.jpg",
        youtubeVidId: "djV11Xbc914",
      },
      {
        artist: "Backstreet Boys",
        title: "I Want It That Way",
        album: "Millennium",
        cover:
          "https://img.discogs.com/Y_lNNU-bKZKcWeQZZ7p7AEFer_E=/fit-in/477x474/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4573970-1368798321-6221.jpeg.jpg",
        youtubeVidId: "4fndeDfaWCg",
      },
    ],
  },
  {
    color: "Purple-Violet",
    keyNote: "A Flat",
    hexaDecValue: "#800080",
    songList: [
      {
        artist: "Taylor Swift",
        title: "Wildest Dreams",
        album: "1989",
        cover:
          "https://img.discogs.com/CePShQzGRqu3RJ83FCrIK0MRJz8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11272334-1513169263-6034.jpeg.jpg",
        youtubeVidId: "IdneKLhsWOQ",
      },
      {
        artist: "John Legend",
        title: "All of Me",
        album: "Love in the Future",
        cover:
          "https://img.discogs.com/CJt5fNjsy0o-Hu9R-M3S5OAsrcI=/fit-in/600x527/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7366302-1592166193-7983.jpeg.jpg",
        youtubeVidId: "450p7goxZqg",
      },
      {
        artist: "Katy Perry",
        title: "Fireworks",
        album: "Teenage Dream",
        cover:
          "https://img.discogs.com/jfSBiY4ecLdsDo0i6cFn3d4-xEw=/fit-in/600x533/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2412921-1282692313.jpeg.jpg",
        youtubeVidId: "QGJuMBdaqIw",
      },
      {
        artist: "Blackpink",
        title: "As If It's Your Last (Korean: 마지막처럼; RR: majimakcheoreom)",
        album: "Single",
        cover:
          "https://img.discogs.com/7u0pdiTzwJ4PVToMZd89jBxmKqI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10474763-1498192193-3153.jpeg.jpg",
        youtubeVidId: "Amq-qlqbjYA",
      },
      {
        artist: "Justin Bieber",
        title: "What Do You Mean?",
        album: "Purpose",
        cover:
          "https://img.discogs.com/ldmUfCGxgYCXXX-cxEyk97QQQJU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7824682-1449833417-6893.jpeg.jpg",
        youtubeVidId: "DK_0jXPuIr0",
      },
    ],
  },
  {
    color: "Blue",
    keyNote: "F Sharp",
    hexaDecValue: "#0000ff",
    songList: [
      {
        artist: "The Beatles",
        title: "Come Together",
        album: "Abbey Road",
        cover:
          "https://img.discogs.com/OnURySqQ8VzdRxOzztR2RxhD8kA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2607424-1298729076.jpeg.jpg",
        youtubeVidId: "45cYwDMibGo",
      },

      {
        artist: "Oasis",
        title: "Wonderwall",
        album: "(What's the Story) Morning Glory?",
        cover:
          "https://img.discogs.com/us3_6FkIhYHLZDkEp5GRFPzZ34Y=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-371341-1262612300.jpeg.jpg",
        youtubeVidId: "bx1Bh8ZvH84",
      },

      {
        artist: "Beyonce",
        title: "Halo",
        album: "I am... Sasha Fierce",
        cover:
          "https://img.discogs.com/qlsOF7980Ell3oaJD8WMkYgXmWo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1540118-1229208917.jpeg.jpg",
        youtubeVidId: "bnVUHWCynig",
      },

      {
        artist: "Adele",
        title: "Someone like you",
        album: "21",
        cover:
          "https://img.discogs.com/9k_xeV7LGQu54acW5O5vJHDJzTY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14093916-1606978857-7761.jpeg.jpg",
        youtubeVidId: "hLQl3WQQoQ0",
      },

      {
        artist: "ABBA",
        title: "Dancing Queen",
        album: "Arrival",
        cover:
          "https://img.discogs.com/KwoNoWRg0HSmwGj5tAcHzsHUF1c=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-441165-1462384422-2682.jpeg.jpg",
        youtubeVidId: "xFrGuyw1V8s",
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
