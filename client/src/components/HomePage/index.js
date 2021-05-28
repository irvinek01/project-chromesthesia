import React, { useState, useEffect } from "react";
import IframesPage from "../IframesPage";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { Container, Card, CardDeck } from "react-bootstrap";
import "./index.css";
import colorAPI from "../../util/colorAPI";
import Buttons from "../Buttons";

function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  // const [color, setColor] = useState(" ");
  const handleClickEvent = (input) => {
    console.log(input);
    // setColor(input);
  };
  const [state, setState] = useState({
    colors: [],
  });
  function getAllButtonsData() {
    colorAPI
      .getAllColors()
      .then((res) => setState({ ...state, colors: res.data }));
    console.log(state.colors);
  }
  useEffect(getAllButtonsData, [state]);
  return (
    <>
      <header className="App-Header"></header>
      <div>
        <Container>
          <h1>Chromesthesia</h1>
          {/* <Buttons colors={state.colors} /> */}
          <CardDeck>
            <Card className="card-red">
              <Card.Body>
                <Card.Title
                  className="text-white"
                  onClick={() => handleClickEvent("Red")}
                >
                  Red
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="card-orangePink">
              <Card.Body>
                <Card.Title
                  className="text-dark"
                  onClick={() => handleClickEvent("Orange")}
                >
                  Orange
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="card-yellow">
              <Card.Body>
                <Card.Title
                  className="text-dark"
                  onClick={() => handleClickEvent("Yellow")}
                >
                  Yellow
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="card-green">
              <Card.Body>
                <Card.Title
                  className="text-white"
                  onClick={() => handleClickEvent("Green")}
                >
                  Green
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="card-purpleViolet">
              <Card.Body>
                <Card.Title
                  className="text-white"
                  onClick={() => handleClickEvent("Purple")}
                >
                  Purple
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="card-blue">
              <Card.Body>
                <Card.Title
                  className="text-white"
                  onClick={() => handleClickEvent("Blue")}
                >
                  Blue
                </Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>

      {/* <body >
        <IframesPage currentColor = {color}/>
        </body> */}
    </>
  );
}

export default HomePage;
