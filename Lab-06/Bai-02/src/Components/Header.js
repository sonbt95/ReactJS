import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Brand href="#">
              <span className="title-1">Travel</span>
              <span className="title-2">Agency</span>
            </Navbar.Brand>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-center">
            <div className="get-started">Contact us: 0123456789 </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
