import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
function HomePage() {
  const history = useHistory();
  const auth = useAuth();

  return (
    <>
      <header className="App-Header">
        <h1>Choose a color to get a custom playlist!</h1>
        <Container>
          <Breadcrumb>
            <Row>
              <Col>
                <Button textColor="primary">Red</Button>
              </Col>
              <Col>
                <Button textColor="primary">Orange</Button>
              </Col>
              <Col>
                <Button textColor="primary">Yellow</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button textColor="primary">Green</Button>
              </Col>
              <Col>
                <Button textColor="primary">Sky Blue</Button>{" "}
              </Col>
              <Col>
                <Button textColor="primary">Blue</Button>
              </Col>
            </Row>
          </Breadcrumb>
        </Container>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/100/50"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/100/50"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/100/50"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/100/50"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/100/50"
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/100/50"
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        {/* hide actions if user is logged in */}
        {!auth.isLoggedIn() && (
          <>
            <button onClick={() => history.push("/login")}>Login</button>
            <button onClick={() => history.push("/signup")}>Signup</button>
          </>
        )}
      </header>
    </>
  );
}

export default HomePage;
