import axios from "axios";

const colorAPI = {
  
  getAllColors: function () {
    return axios.get("/api/colors");
  },

  getPlaylistByColor: function (color) {
    return axios.post("/api/colors/" + color);
  },

};

export default colorAPI;