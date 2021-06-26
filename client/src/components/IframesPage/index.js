// import { useAuth } from "../../util/auth";
import React, { useState, useEffect } from "react";
import colorAPI from "../../util/colorAPI";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  CardGroup,
} from "react-bootstrap";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.

function IframesPage({ songsObj }) {
  let listSongByArtist = [];
  let currentSongVideo,
    currentSongArtist,
    currentSongTitle,
    currentSongAlbum,
    currentSongAlbumCover;
  let nextSongArtist, nextSongTitle;
  var i;
  for (i = 0; i < songsObj.length; i++) {
    // All list song data
    listSongByArtist.push(songsObj[i].title + " by " + songsObj[i].artist);
    // Current Song Data
    currentSongVideo =
      "https://www.youtube.com/embed/" +
      songsObj[i - i].youtubeVidId +
      "?autoplay=1&mute=1";
    // put out &mute=1 for music
    currentSongArtist = songsObj[i - i].artist;
    currentSongTitle = songsObj[i - i].title;
    currentSongAlbum = songsObj[i - i].album;
    currentSongAlbumCover = songsObj[i - i].cover;

    // Next Song Data
    nextSongArtist = songsObj[i - i + 1].artist;
    nextSongTitle = songsObj[i - i + 1].title;
  }
  console.log(listSongByArtist);
  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} md={8}>
          <Container>
            <CardGroup>
              <Card>
                <div>
                  <iframe
                    src={currentSongVideo}
                    height="390"
                    width="640"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                    {currentSongTitle} by {currentSongArtist}
                  </Card.Title>
                  <Card.Text>
                    <b>Album:</b> {currentSongAlbum}
                    <img
                      alt="Album Cover"
                      src={currentSongAlbumCover}
                      height="175px"
                      width="175px"
                      
                    />
                    <br />
                    Next Song is: {nextSongTitle} by {nextSongArtist}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </Col>
        <Col xs={6} md={4}>
          <ListGroup>
            <ListGroup.Item>
              <b>*Section for the queued up songs to play*</b>
            </ListGroup.Item>
            {listSongByArtist.map((res) => {
              return <ListGroup.Item>{res}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default IframesPage;
