import { Card, CardDeck } from "react-bootstrap";
import "./index.css";
function Buttons({ colorsData, handleClick }) {
  return (
    <CardDeck>
      {colorsData.map((res) => {
        return (
          <Card.Title className="mx-auto"  key={res._id}>
            <button
              variant="contained"
              className="float-right md-auto btn-styling"
        
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
