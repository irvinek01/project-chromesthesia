import { Card, CardDeck } from "react-bootstrap";

function Buttons({ colorsData, handleClick }) {
  return (
    <CardDeck>
      {colorsData.map((res) => {
        return (
          <Card.Title key={res._id} className="text-dark mx-auto">
            <button
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
