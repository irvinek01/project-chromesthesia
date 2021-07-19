import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../util/auth";
import { Container } from "react-bootstrap";
import "./index.css";
import YoutubeEmbed from "../HomePage/youtubeWelcome";
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
          <h1 className="heading-1">
            {" "}
            Chromesthesia{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              fill="currentColor"
              className="bi bi-headphones"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
            </svg>
          </h1>

          <Buttons colorsData={color.colorList} handleClick={handleClick} />
          {showResults ? (
            <Iframe
              bgcolor={color.chromesthesia}
              songsObj={color.songList}
              defaultVal={color.default}
            />
          ) : null}

          <div className="welcome-style p-5 text-white">
            <h1 className="welcome-text">Concept Introduction</h1>
            <p className=" text-justify">
            <div className="App">
      
      <YoutubeEmbed embedId="Yg54mKX1T34" />
    </div>
              Medical Definition of <i>Chromesthesia:</i> A type of synesthesia
              in which a nonvisual stimulus causes the individual to perceive
              color. Color hearing is a form of chromesthesia. In color hearing
              a musical tone elicits a color. One well-studied case involved an
              art teacher who had a range of consistent linkages between tone
              and color. For her, high octaves tended to evoke a lighter color
              value, while lower octaves evoked a darker color value. And rapid
              major chord tone sequences elicited rapid flashes of colors,
              "somewhat like fireworks exploding."
              <p className="text-right m-3">
                Ref.: Haack, P. A., & Radocy, R. E. (1981). A case study of a
                chromesthetic. Journal of Research in Music Education, 29, 85-90
              </p>
            </p>
            <p className="text-justify">
              <i>Alexander Scriabin</i> was a Russian composer and pianist. He
              is famously regarded as a synesthete, but there is a lot of
              controversy surrounding whether he had chromesthesia or not.
              Scriabin was a major proponent of Theosophy, which had a system
              associating colors to feelings and emotions.This influenced the
              musician, who distinguished "spiritual" tonalities (like F-sharp
              major) from "earthly, material" ones (C major, F major).
              Furthermore, Alexander Scriabin developed a "keyboard with lights"
              or clavier à lumières, which directly matched musical notes with
              colors. "Scriabin believed integration of colored light within a
              symphonic work would act as a 'powerful psychological resonator
              for the listener'". That is why he created the clavier à lumières
              for his color-symphony Prometheus: The Poem of Fire.This consisted
              of a color organ, which projected colors on a screen. The
              musicologist Sabaneyev first published a table of Scriabin's
              sound-to-color mapping in 1911:
              <p className="text-right m-3">
                Ref.:
                https://en.wikipedia.org/wiki/Chromesthesia#Alexander_Scriabin
              </p>
            </p>

            <p>
              We used Scriabin`s Sound-to-color associations to produce a music
              video playlists
            </p>

            <table className="table table-striped table-bordered table-hover text-white">
              <thead className="table-success">
                <tr>
                  <th>Note</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <td>G</td>
                  <td>Orange-pink</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>Yellow</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>Green</td>
                </tr>
                <tr>
                  <td>E</td>
                  <td>Whitish-blue</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>Similar to E</td>
                </tr>
                <tr>
                  <td>F♯</td>
                  <td>Blue, bright</td>
                </tr>
                <tr>
                  <td>D♭</td>
                  <td>Violet</td>
                </tr>
                <tr>
                  <td>A♭</td>
                  <td>Purplish-violet</td>
                </tr>
                <tr>
                  <td>E♭</td>
                  <td>Steel color with metallic sheen</td>
                </tr>
                <tr>
                  <td>B♭</td>
                  <td>Similar to E flat</td>
                </tr>
                <tr>
                  <td>F</td>
                  <td>Red, dark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
