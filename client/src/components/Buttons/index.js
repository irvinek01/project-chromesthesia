import { Card, CardDeck } from "react-bootstrap";

function Buttons({ colorsData, handleClick }) {
  return (
    <CardDeck>
      {colorsData.map((res) => {
        return (
          <Card
            style={{ backgroundColor: res.hexaDecValue }}
            key={res._id}
            color={res.color}
          >
            <Card.Body>
              <Card.Title
                className="text-dark"
                onClick={() => handleClick(res.color)}
              >
                <span className="bg-white">{res.keyNote}</span>
              </Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </CardDeck>
  );
}

export default Buttons;
