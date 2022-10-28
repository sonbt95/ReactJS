import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Slider from "./Components/Slider/Slider";
import { Routes, Route } from "react-router-dom";
import Manage from "./Components/Manage/Manage";

function App() {
  return (
    <Container>
      <Slider />
      <Row className="mt-3 bg-light ">
        <Col xs={9}>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/manage" element={<Manage />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Col>
        <Col xs={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
