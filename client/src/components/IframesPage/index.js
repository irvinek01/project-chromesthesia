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
  
  const urlVideo =
    "https://www.youtube.com/embed/" +
    songsObj[0].youtubeVidId +
    "?autoplay=1&mute=1";

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
                    src={urlVideo}
                    height="390"
                    width="640"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Song Title</Card.Title>
                  <Card.Text>Artist Album</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </Col>
        <Col xs={6} md={4}>
          <ListGroup>
            <ListGroup.Item>
              *Section for the queued up songs to play*
            </ListGroup.Item>
            <ListGroup.Item>*Find by the key or id?*</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default IframesPage;
