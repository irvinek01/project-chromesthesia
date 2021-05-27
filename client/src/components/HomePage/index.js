import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardDeck,
  Jumbotron,
} from "react-bootstrap";
import "./index.css";
function HomePage() {
  const history = useHistory();
  const auth = useAuth();

  return (
    <>
      <header className="App-Header">
        <div>
          <Container>
            <h1>Chromesthesia</h1>
            <CardDeck>
              <Card className="card-red">
                <Card.Body>
                  <Card.Title className="text-white">Red</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-orangePink">
                <Card.Body>
                  <Card.Title className="text-dark">Orange</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-yellow">
                <Card.Body>
                  <Card.Title className="text-dark">Yellow</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-green">
                <Card.Body>
                  <Card.Title className="text-white">Green</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-purpleViolet">
                <Card.Body>
                  <Card.Title className="text-white">Purple</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-blue">
                <Card.Body>
                  <Card.Title className="text-white">Blue</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
      </header>
    </>
  );
}

export default HomePage;
