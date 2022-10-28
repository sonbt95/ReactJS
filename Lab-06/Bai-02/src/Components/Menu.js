import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Container>
      <Row className="text-center bg-light menu-content">
        <Col>
          <Card className="card-menu bg-warning">
            <Card.Body>
              <Link to="/consulting" className="nav-link">
                consuling
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-menu bg-primary">
            <Card.Body>
              <Link to="/travel-guide" className="nav-link">
                travel guide
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-menu bg-success">
            <Card.Body>
              <Link to="/hotel-info" className="nav-link">
                hotel info
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
