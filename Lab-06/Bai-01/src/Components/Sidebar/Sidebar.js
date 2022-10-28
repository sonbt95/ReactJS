import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="mt-3">
      <ListGroup>
        <ListGroup.Item>
          <Link to="/home" className="nav-link">
            Balo Laptop
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/" className="nav-link">
            Balo Camera
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/" className="nav-link">
            Túi Sách
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/" className="nav-link">
            Vali
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/manage" className="nav-link">
            Quản lí
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
