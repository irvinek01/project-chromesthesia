import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../util/auth";
import { Container } from "react-bootstrap";
import "./index.css";
import YoutubeEmbed from "../HomePage/youtubeWelcome"
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
    default: "",
    chromesthesia: "",
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
    // console.log(colorData[0]);
    // console.log(colorData[0].hexaDecValue);
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
      default: 0,
      chromesthesia: colorData[0].hexaDecValue,
    });
  }

  return (
    <>
      <header className="App-Header"></header>
      <div className="body-1">
        <Container>
          <h1 className="heading-1"> Chromesthesia <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="currentColor" className="bi bi-headphones" viewBox="0 0 16 16">
  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
</svg></h1>
 
          <Buttons colorsData={color.colorList} handleClick={handleClick} />
          {showResults ? (
            <Iframe
              bgcolor={color.chromesthesia}
              songsObj={color.songList}
              defaultVal={color.default}
            />
          ) : null}
         
          <div className="welcome-style">
      <h1 className="welcome-text">Our Welcome Message</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
          
          
        </Container>
      </div>
    </>
  );
}

export default HomePage;
