import React, {useState} from "react";
import IframesPage from "../IframesPage"
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
  const [color, setColor] = useState(" ");
  const handleClickEvent =(input)=>{ 
    console.log(input)
    setColor(input); }
  return (
    <>
      <header className="App-Header">
        <div>
          <Container>
            <h1>Chromesthesia</h1>
            <CardDeck>
              <Card className="card-red">
                <Card.Body>
                  <Card.Title className="text-white" onClick = {() => handleClickEvent("Red")}>Red</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-orangePink">
                <Card.Body>
                  <Card.Title className="text-dark" onClick = {() => handleClickEvent("Orange")}>Orange</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-yellow">
                <Card.Body>
                  <Card.Title className="text-dark"onClick = {() => handleClickEvent("Yellow")}>Yellow</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-green">
                <Card.Body>
                  <Card.Title className="text-white"onClick = {() => handleClickEvent("Green")}>Green</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-purpleViolet">
                <Card.Body>
                  <Card.Title className="text-white"onClick = {() => handleClickEvent("Purple")}>Purple</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card-blue">
                <Card.Body>
                  <Card.Title className="text-white"onClick = {() => handleClickEvent("Blue")}>Blue</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
          
        </div>
      </header>
      <body >
        <IframesPage currentColor = {color}/>
        </body>
    </>
  );
}

export default HomePage;
