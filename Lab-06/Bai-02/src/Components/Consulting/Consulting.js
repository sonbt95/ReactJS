import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bali from "../Img/Consuling/bali.jpg";
import bangkok from "../Img/Consuling/bangkok.jpg";
import barcelona from "../Img/Consuling/barcelona.jpg";
import beijing from "../Img/Consuling/beijing.jpg";
import berlin from "../Img/Consuling/berlin.jpg";
import bermuda from "../Img/Consuling/bermuda.jpg";
import boston from "../Img/Consuling/boston.jpg";
import tokyo from "../Img/Consuling/tokyo.jpg";
import seoul from "../Img/Consuling/seoul.jpg";

export default function () {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={bali} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">
                  indonesia
                </Card.Text>
                <Card.Title className="fs-3">Bali</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={bangkok} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">
                  thailand
                </Card.Text>
                <Card.Title className="fs-3">Bangkok</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={barcelona} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">spain</Card.Text>
                <Card.Title className="fs-3">Barcelona</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={beijing} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">china</Card.Text>
                <Card.Title className="fs-3">Beijing</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={berlin} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">
                  germany
                </Card.Text>
                <Card.Title className="fs-3">Berlin</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={bermuda} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">
                  caribean + bermuda
                </Card.Text>
                <Card.Title className="fs-3">Bermuda</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={boston} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">
                  united states
                </Card.Text>
                <Card.Title className="fs-3">Boston</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={tokyo} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">japan</Card.Text>
                <Card.Title className="fs-3">Tokyo</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="text-center my-3 bg-light">
              <Card.Img variant="top" src={seoul} className="img-fluid" />
              <Card.Body>
                <Card.Text className="text-uppercase fw-bold ">Korea</Card.Text>
                <Card.Title className="fs-3">Seoul</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
