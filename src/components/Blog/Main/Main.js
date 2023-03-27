import { Container, Row, Col } from "react-bootstrap";
import Banner from './../../../img/main-banner.jpg';
import './Main.css';

import React from "react";

export default function Main() {
  // bodyClassAdd = (event) => {
  //   document.body.classList.add('main-page');
  // }
  return (
    <div>
      <Container className="conatiner-with-bg">
        <Row className="main-banner mt-5 pt-5">
          <Col md={6}>
            <h1>Welcome to Blog Page.</h1>
            <p className="py-5">Please refer to the navigation.</p>
          </Col>
          <Col md={6}>
          <img src={Banner} alt="Banner" />;
          </Col>
        </Row>
      </Container>
    </div>
  );
}
