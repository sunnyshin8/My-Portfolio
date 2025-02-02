import React from "react";
import { Button, Card } from "react-bootstrap";

function BookCards(props) {
  return (
    <Card className="book-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="book-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button href={props.bookLink} target="_blank" rel="noopener noreferrer">
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCards;