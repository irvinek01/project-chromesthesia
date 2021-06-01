// import { useAuth } from "../../util/auth";
import React, { useState, useEffect } from "react";
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
  let listSongsByArtist = [];
  let currentSongVideo,
    currentSongArtist,
    currentSongTitle,
    currentSongAlbum,
    currentSongAlbumCover;
  let nextSongArtist, nextSongTitle;
  var i;
  for (i = 0; i < songsObj.length; i++) {
    // All list song data
    listSongsByArtist.push({
      songTitle: songsObj[i].title,
      songArtist: songsObj[i].artist,
      songId: songsObj[i].youtubeVidId,
    });
    // Current Song Data
    currentSongVideo =
      "https://www.youtube.com/embed/" +
      songsObj[i - i].youtubeVidId +
      "?autoplay=1";
    // put out &mute=1 for music
    currentSongArtist = songsObj[i - i].artist;
    currentSongTitle = songsObj[i - i].title;
    currentSongAlbum = songsObj[i - i].album;
    currentSongAlbumCover = songsObj[i - i].cover;

    // Next Song Data
    nextSongArtist = songsObj[i - i + 1].artist;
    nextSongTitle = songsObj[i - i + 1].title;
  }
  console.log(listSongsByArtist);
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
          {listSongsByArtist.map((res) => {
            return (
              <ListGroup key={res.songId}>
                <ListGroup.Item>
                  {res.songTitle} by {res.songArtist}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default IframesPage;
