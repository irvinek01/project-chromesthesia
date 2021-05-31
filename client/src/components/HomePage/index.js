import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../util/auth";
import { Container } from "react-bootstrap";
import "./index.css";
import colorAPI from "../../util/colorAPI";
import Buttons from "../Buttons";
import Iframe from "../IframesPage";

function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  const [state, setState] = useState({
    colors: [],
    colorName: "",
  });
  function getAllButtonsData() {
    colorAPI
      .getAllColors()
      .then((res) => setState({ ...state, colors: res.data }));
    // console.log(state.colors);
  }

  useEffect(getAllButtonsData, [state]);

  async function handleClick(color) {
    // console.log(color);
    const colorData = state.colors.filter(
      (colorData) => colorData.color === color
    );
    console.log(colorData);
    // console.log(colorData[0].color);
    // setState({ colorName: colorData[0].color });
    // console.log(state.colorName);
  }

  return (
    <>
      <header className="App-Header"></header>
      <div>
        <Container>
          <h1>Chromesthesia</h1>
          <Buttons colorsData={state.colors} handleClick={handleClick} />
          <Iframe />
        </Container>
      </div>
    </>
  );
}

export default HomePage;
