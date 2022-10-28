import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import CardGroup from "react-bootstrap/CardGroup";

import "./Home.css";
import slide from "../Img/slide-1.jpg";
import travel1 from "../Img/travel-1.jpg";
import travel2 from "../Img/travel-2.jpg";
import travel3 from "../Img/travel-3.jpg";
import Menu from "../Menu";

export default function Home() {
  return (
    <Container>
      <Card className="text-white">
        <Card.Img src={slide} alt="Card image" />
        <Carousel.Caption className="carousel-title">
          <h3>See what the buzz is all about</h3>
          <h1>International Travel Agency</h1>

          <Button variant="warning">GET THE BEST OFFER</Button>
        </Carousel.Caption>
      </Card>
      <Menu />
      <div className="text-center mt-3">
        <h2>What We Offer</h2>

        <p className="text-uppercase">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={travel1} />
          <Card.Body>
            <Card.Title className="text-uppercase">
              sed ud perspiciatis
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={travel2} />
          <Card.Body>
            <Card.Title className="text-uppercase">
              tempor incididunt
            </Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={travel3} />
          <Card.Body>
            <Card.Title className="text-uppercase">
              lorem ipsum dolor
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
