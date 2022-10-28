import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import background from "../Img/background.jpg";
import "./TravelGuide.css";
export default function TravelGuide() {
  return (
    <Container>
      <Card className="bg-dark text-white card-head">
        <Card.Img src={background} alt="Card image" className="img" />
        <Card.ImgOverlay className="text">
          <Card.Title>Would Travel Guide</Card.Title>

          <Form.Control type="text" placeholder="Where would you like to go?" />
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}
