import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BookCards from "./BookshelfCards"; // You'll need to create this component
import book1 from "../../Assets/Books/Book1.jpg";

// Import other book images as needed

function Bookshelf() {
  return (
    <Container fluid className="book-section">
      <Particle />
      <Container>
        <h1 className="book-heading">
        <strong className="purple">My Bookshelf</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a collection of books that have influenced my journey
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="book-card">
            <BookCards
              imgPath={book1}
              title="Exploring the Maze of Love"
              bookLink="https://www.amazon.in/Exploring-Maze-Love-Understanding-Navigations-ebook/dp/B0DTDG8JYR/ref=sr_1_2?crid=29E9SOR1GN0K4&dib=eyJ2IjoiMSJ9.G-4_bbEAbaU1DCvPAG-EIBePxvhDUa0qIEKaKJwRm71vmjgeAXA3sc42q5Q2RtMhG9F3I8HGGk3hJkkJgye8FYGiXO_jDVYmTbOmbbqd0pmOZoFtewUt-aHeAYy1iK9ZgdivP4O9fbajL7EXcq4iSvZS0draDCIhVJYxVMQuYKmISyAub4xPi9f3TWcsUWDalZ70QQizdyqOhuobMjWue_JiVoQKG_sK0UHXVSAUxkY.offpkrCSbZhPGrISNg0-1mLwoot3M0VIhdDlEn8md6s&dib_tag=se&keywords=exploring+the+maze&qid=1738520348&sprefix=exploring+the+maze+%2Caps%2C213&sr=8-2"
              buttonText="Buy Now"
            />
          </Col>

          

          {/* Add more books following the same structure */}
        </Row>
      </Container>
    </Container>
  );
}

export default Bookshelf;