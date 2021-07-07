import { useAuth } from "../../util/auth";

import { Jumbotron, Container, Card, CardDeck } from "react-bootstrap";
import "./index.css";
// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function UserPage() {
  const auth = useAuth();
  return (
    <div>
      <div>
        <Jumbotron fluid className="jumbotron-1">

          <Container className="profile-name">
            <h1 className="profile-text">{auth.user.username}'s User Profile</h1>
            <p className="static-text">
              Take a look at your last selected colors!
</p>
          </Container>
        </Jumbotron>
      </div>
      <Container>
        <h4> View Previously Selected Colors </h4>
        <br></br>
        <CardDeck>
          <Card className="bg-danger text-white">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Red</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="bg-primary text-white">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Blue</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Black</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

export default UserPage;
