import { Card, CardDeck } from "react-bootstrap";

function Buttons({ colorsData, handleClick }) {
  return (
    <CardDeck>
      {colorsData.map((res) => {
        return (
          <Card.Title className="mx-auto"  key={res._id}>
            <button
              variant="contained"
              className="float-right md-auto"
              onClick={handleClick}
              style={{ backgroundColor: res.hexaDecValue }}
              value={res.color}
            >
              {res.keyNote}
            </button>
          </Card.Title>
        );
      })}
    </CardDeck>
  );
}

export default Buttons;
