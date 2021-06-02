import axios from "axios";
require("dotenv").config();

const { DISCOGSTOKEN } = process.env;
const colorAPI = {
  getAlbumCover: function (artist, albumTitle) {
    return axios.get(
      "https://api.discogs.com/database/search?artist=" +
        artist +
        "&title=" +
        albumTitle +
        "&token=" +
        DISCOGSTOKEN +
        "&page=1&per_page=1"
    );
  },
  getAllColors: function () {
    return axios.get("/api/colors");
  },
  getPlaylistByColor: function (color) {
    return axios.get("/api/colors/" + color);
  },
};

export default colorAPI;
