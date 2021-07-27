// import { useAuth } from "../../util/auth";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  CardGroup,
  CardColumns,
} from "react-bootstrap";
import YouTube from "@u-wave/react-youtube";
import "./index.css";
const hashVideoRx = /^#!\/video\/(\d)$/;
const hash = typeof window.location !== "undefined" ? window.location.hash : ""; // eslint-disable-line no-undef
const defaultVideo = hashVideoRx.test(hash)
  ? parseInt(hash.replace(hashVideoRx, "$1"), 10)
  : 0;

function IframesPage({ songsObj, bgcolor, defaultVal }) {
  let listSongsByArtist = [];

  var i;

  for (i = 0; i < songsObj.length; i++) {
    // All list song data
    listSongsByArtist.push({
      songTitle: songsObj[i].title,
      songArtist: songsObj[i].artist,
      songAlbumTitle: songsObj[i].album,
      songAlbumCover: songsObj[i].cover,
      songVidId: songsObj[i].youtubeVidId,
    });
    // // Current Song Data
    // currentSongVideo = songsObj[i - i].youtubeVidId;
    // currentSongArtist = songsObj[i - i].artist;
    // currentSongTitle = songsObj[i - i].title;
    // currentSongAlbum = songsObj[i - i].album;
    // currentSongAlbumCover = songsObj[i - i].cover;
    // // Next Song Data
    // nextSongArtist = songsObj[i - i + 1].artist;
    // nextSongTitle = songsObj[i - i + 1].title;
  }
  // console.log(listSongsByArtist);
  const [videoIndex, setVideoIndex] = useState(defaultVideo);

  const video = listSongsByArtist[videoIndex];

  function selectVideo(index) {
    setVideoIndex(index);
  }

  function handleOnEnd() {
    if (videoIndex < listSongsByArtist.length) {
      setVideoIndex(+1);
      return;
    }
    setVideoIndex(0);
  }

  return (
    <Container>

      <Row className="main-content">
        <Col className="spacing-content">
          <Container fluid>

            <Card>
              
              <YouTube
                video={video.songVidId}
                width="853"
                height="480"
                autoplay
                allowFullscreen
                className="youtube"
                onEnd={handleOnEnd}

              />

              <Card.Body className="card-style" style={{ backgroundColor: bgcolor }}>
                <Card.Title className="text-card">
                  {video.songTitle} by {video.songArtist}
                </Card.Title>
                <Card.Text>
                  <img
                    src={video.songAlbumCover}
                    alt="Album Cover"
                    height="175px"
                    width="175px"

                  />
                </Card.Text>
                <Card.Text className="text-card">
                  <b>Album:</b> {video.songAlbumTitle}
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>

          </Container>
        </Col>
        <Col >
          <Card className="q">
            <ListGroup.Item style={{ backgroundColor: bgcolor }}>
              <b>Q'd Songs </b>
            </ListGroup.Item>
            {listSongsByArtist.map((choice, index) => (
              <ListGroup.Item key={choice.songVidId}>
                <a
                  href={`#!/video/${index}`}
                  onClick={() => selectVideo(index)}
                >
                  {choice.songTitle} by {choice.songArtist}
                </a>
              </ListGroup.Item>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IframesPage;