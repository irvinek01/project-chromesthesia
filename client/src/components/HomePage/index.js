import React, { useState, useEffect } from "react";
import IframesPage from "../IframesPage";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { Container } from "react-bootstrap";
import "./index.css";
import history from "../../util/history";
import colorAPI from "../../util/colorAPI";
import Buttons from "../Buttons";

function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  const [state, setState] = useState({
    colors: [],
  });
  function getAllButtonsData() {
    colorAPI
      .getAllColors()
      .then((res) => setState({ ...state, colors: res.data }));
    // console.log(state.colors);
  }

  useEffect(() => {
    getAllButtonsData()
  }, [state])

  const handleClick = () => {
    history.push({
      pathname: "/iframespage",
    });
  };
  return (
    <>
      <header className="App-Header"></header>
      <div>
        <Container>
          <h1>Chromesthesia</h1>
          <Buttons colorsData={state.colors} onClick={handleClick} />
        </Container>
      </div>
    </>
  );
}

export default HomePage;
