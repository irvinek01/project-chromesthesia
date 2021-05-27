// import { useAuth } from "../../util/auth";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  CardGroup,
} from "react-bootstrap";
// import YouTube from "react-youtube";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function IframesPage() {
  const [state, setState] = useState({
    YTVidId: "",
    list: [],
  });

  // function componentDidMount() {
  //   this.setState({
  //     YTVidId: this.props.location.state.YTVidId,
  //     list: [this.props.location.state.list],
  //   });
  // }

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
                    src="https://www.youtube.com/embed/0habxsuXW4g?autoplay=1&mute=1"
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
