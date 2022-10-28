import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./HotelInfo.css";

export default function HotelInfo() {
  return (
    <Container>
      <h4 className="text-color text-uppercase fs-1">
        search for a great hotel in the most popular cities
      </h4>
      <Row>
        <Col xs={4} className="my-3">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
              className="bg-dark"
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="fw-2 text-uppercase fs-3">
                London
              </Card.Title>
              <Card.Text className="fw-2 fs-3">
                <span>Hotels</span>&ensp;
                <span className=" text-color">from 59$</span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={4} className="my-3">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1624915791058-ac0493a9e778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="fw-2 fs-3 text-uppercase">
                Istanbul
              </Card.Title>
              <Card.Text className="fw-2 fs-3">
                <span>Hotels</span>&ensp;
                <span className="text-color">from 24$</span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={4} className="my-3">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="fw-2 fs-3 text-uppercase">
                Paris
              </Card.Title>
              <Card.Text className="fw-2 fs-3">
                <span>Hotels</span>&ensp;
                <span className="text-color">from 55$</span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={4} className="my-3">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="fw-2 fs-3 text-uppercase">
                Berlin
              </Card.Title>
              <Card.Text className="fw-2 fs-3">
                <span>Hotels</span>&ensp;
                <span className=" text-color">from 49$</span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={4} className="my-3">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="fw-2 fs-3 text-uppercase">
                Munich
              </Card.Title>
              <Card.Text className="fw-2 fs-3">
                <span>Hotels</span>&ensp;
                <span className=" text-color">from 51$</span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={4} className="my-3">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1577609060534-4254158ea447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="fw-2 fs-3 text-uppercase">
                Kuala Lumpur
              </Card.Title>
              <Card.Text className="fw-2 fs-3">
                <span>Hotels</span>&ensp;
                <span className="text-color">from 26$</span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
