import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../util/auth";
import { Container } from "react-bootstrap";
import "./index.css";
import colorAPI from "../../util/colorAPI";
import Buttons from "../Buttons";
import Iframe from "../IframesPage";

function HomePage() {
  const history = useHistory();
  const auth = useAuth();

  const [color, setColor] = useState({
    colorList: [],
    filteredColor: "",
    songList: [],
  });
  const [showResults, setShowResults] = React.useState(false);

  useEffect(() => {
    colorAPI.getAllColors().then((res) => {
      setColor({ ...color, colorList: res.data });
    });
  }, []);
  // console.log(color.songList);

  function handleClick(e) {
    e.preventDefault();
    const clickedColor = e.target.value;
    setShowResults(true);
    // console.log(clickedColor);
    const colorData = color.colorList.filter(
      (colorData) => colorData.color === clickedColor
    );
    // console.log(colorData[0].songList);
    const songs = colorData[0].songList.map((song) => {
      const songData = {
        artist: song.artist,
        title: song.title,
        album: song.album,
        cover: song.cover || "https://via.placeholder.com/150",
        youtubeVidId: song.youtubeVidId,
      };
      return songData;
    });
    setColor({
      ...color,
      filteredColor: colorData[0].color,
      songList: songs,
    });
  }

  return (
    <>
      <header className="App-Header"></header>
      <div>
        <Container>
          <h1>Chromesthesia</h1>
          <Buttons colorsData={color.colorList} handleClick={handleClick} />
          {showResults ? <Iframe songsObj={color.songList} /> : null}
        </Container>
      </div>
    </>
  );
}

export default HomePage;
