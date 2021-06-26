import { Card, CardDeck } from "react-bootstrap";

function Buttons({ colorsData, handleClick }) {
  return (
    <CardDeck>
      {colorsData.map((res) => {
        return (
          <Card key={res._id}>
            <Card.Body>
              <Card.Title className="text-light">
                <button
                  onClick={handleClick}
                  style={{ backgroundColor: res.hexaDecValue }} 
                  value={res.color}
                  
                >
                  {res.keyNote}
                </button>
              </Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </CardDeck>
  );
}

export default Buttons;
