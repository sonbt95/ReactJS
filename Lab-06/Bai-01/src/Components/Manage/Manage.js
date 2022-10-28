import React from "react";
import { Row, Col, Form, Table } from "react-bootstrap";
import balo1 from "../Img/balo-1.jpg";
import balo2 from "../Img/balo-2.jpg";
import balo3 from "../Img/balo-3.jpg";
import balo4 from "../Img/balo-4.jpg";
import balo5 from "../Img/balo-5.jpg";

export default function Manage() {
  return (
    <div>
      <div>
        <h2 className="mt-4 mb-4">Quản lý thông tin balo</h2>
        <fieldset className="border border-secondary ">
          <legend className="my-3 mx-3">Thêm thông tin balo mới</legend>
          <Form className="my-3 mx-3">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tên Balo:</Form.Label>
                <Form.Control type="text" placeholder="Thêm balo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Loại balo:</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Balo Laptop</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Giá:</Form.Label>
                <Form.Control type="number" placeholder="Thêm giá" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Hình:</Form.Label>
                <Form.Control type="file" name="file_img" />
              </Form.Group>
            </Row>
          </Form>
        </fieldset>
      </div>
      {/*Table*/}
      <div className="mt-4">
        <Table striped bordered hover>
          <thead className="bg-primary text-center text-white">
            <tr>
              <th>Mã Balo</th>
              <th>Tên Balo</th>
              <th>Giá</th>
              <th>Loại</th>
              <th>Hình</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center align-middle">
              <td>1</td>
              <td>Balo Case Logic</td>
              <td>60000</td>
              <td>Balo Laptop</td>
              <td width={100}>
                <img src={balo1} alt="balo 1" className="img-fluid" />
              </td>
            </tr>
            <tr className="text-center align-middle">
              <td>2</td>
              <td>Balo Case Logic</td>
              <td>60000</td>
              <td>Balo Laptop</td>
              <td width={100}>
                <img src={balo2} alt="balo 2" className="img-fluid" />
              </td>
            </tr>
            <tr className="text-center align-middle">
              <td>3</td>
              <td>Balo Case Logic</td>
              <td>60000</td>
              <td>Balo Laptop</td>
              <td width={100}>
                <img src={balo3} alt="balo 3" className="img-fluid" />
              </td>
            </tr>
            <tr className="text-center align-middle">
              <td>4</td>
              <td>Balo Case Logic</td>
              <td>60000</td>
              <td>Balo Laptop</td>
              <td width={100}>
                <img src={balo4} alt="balo 4" className="img-fluid" />
              </td>
            </tr>
            <tr className="text-center align-middle">
              <td>5</td>
              <td>Balo Case Logic</td>
              <td>60000</td>
              <td>Balo Laptop</td>
              <td width={100}>
                <img src={balo5} alt="balo 5" className="img-fluid" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
