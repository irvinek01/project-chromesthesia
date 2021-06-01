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

function IframesPage({ currentColor}) {
  const [state, setState] = useState({
    colorName: "",
    songList: [],
    songId: "YlUKcNNmywk"
    
  });
  
  // "YlUKcNNmywk"
  const urlVideo =
    "https://www.youtube.com/embed/" + state.songId + "?autoplay=1&mute=1";

  useEffect(() => {
    console.log("Iframe", currentColor);
    // Update the document title using the browser API
    if (currentColor === "Red") {
      setState({ songUrl: "" });
    }
    // document.title = `You clicked ${songUrl} times`;
  }, [currentColor]);

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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
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
