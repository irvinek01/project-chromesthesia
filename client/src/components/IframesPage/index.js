// import { useAuth } from "../../util/auth";

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
function IframesPage() {
  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} md={8}>
          <Container>
            <CardGroup>
              <Card>
                <div>Put I frame here</div>
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
