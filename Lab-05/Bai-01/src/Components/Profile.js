import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Images from "./Images/avatar.png";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg="4" className="bg-dark text-white text-center py-4">
              <div className="header-left">
                <img
                  src={Images}
                  alt=""
                  className="img-thumbnail rounded-circle mb2"
                />
                <h1 display={5}> Bui Thien Son </h1>
                <h4 className="lead text-uppercase text-white-50 mb-4">
                  FrontEnd Development
                </h4>
              </div>
              <div>
                <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">
                  contact
                </h5>
                <ul className="list-unstyled text-white-50 ml-5 py-2 text-center">
                  <li className="list-item">Phone: 0123 456 789</li>
                  <li className="list-item">Mail: abc@gmail.com</li>
                  <li className="list-item">Github: abc.github.com</li>
                  <li className="list-item">Place: Ho Chi Minh , VietNam</li>
                </ul>
              </div>
              <div>
                <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">
                  Skills
                </h5>
                <ul className="list text-white-50 ml-5 py-2 text-start text-capitalize">
                  <li className="list-item">Html, Css skills</li>
                  <li className="list-item">Angular, ReactJs skills</li>
                  <li className="list-item">Japanese skills</li>
                  <li className="list-item">English skills</li>
                </ul>
              </div>
              <div>
                <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">
                  Education
                </h5>
                <ul className="list text-white-50 ml-5 py-2 text-start text-capitalize">
                  <li className="list-item">Japanese, Van Hien University</li>
                  <li className="list-item">Front End, VietUc Center</li>
                  <li className="list-item">Mos</li>
                  <li className="list-item">JLPT N3</li>
                </ul>
              </div>
            </Col>
            <Col lg="8" className="bg-light text-dark py-4 px-5">
              <div className="header-right">
                <h4 className="text-uppercase">profile</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eget magna quis lorem tempus hendrerit ut sit amet lectus.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Sed sit amet massa vitae
                  leo porttitor pellentesque. Nulla vel mollis purus, in commodo
                  libero.
                </p>
              </div>
              <div>
                <h4 className="text-uppercase">work experience</h4>
                <hr />
                <ul className="list">
                  <li className="list-item">
                    <h5 className=" text-uppercase">FrontEnd Development</h5>
                    <h6 className="text-uppercase text-black-50">
                      company name / 2020 - present
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras eget magna quis lorem tempus hendrerit ut sit amet
                      lectus.
                    </p>
                  </li>
                  <li className="list-item">
                    <h5 className=" text-uppercase">FrontEnd Development</h5>
                    <h6 className="text-uppercase text-black-50">
                      company name / 2020 - present
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras eget magna quis lorem tempus hendrerit ut sit amet
                      lectus.
                    </p>
                  </li>
                  <li className="list-item">
                    <h5 className=" text-uppercase">FrontEnd Development</h5>
                    <h6 className="text-uppercase text-black-50">
                      company name / 2020 - present
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras eget magna quis lorem tempus hendrerit ut sit amet
                      lectus.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
