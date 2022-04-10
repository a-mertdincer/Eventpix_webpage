import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// Core Components

function Feature1() {
  return (
    <>
      <div className="section features-1">
        <Container>
          <Row>
            <Col className="mx-auto text-center" md="8">
              <h3 className="display-3">We Provide Solutions</h3>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                  <i className="ni ni-user-run"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                Sports Events
                </h6>
                <p className="description opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum sodales, elementum nunc non, vulputate augue. Vivamus tempus semper risus ac iaculis.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                  <i className="ni ni-istanbul"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                Congresses
                </h6>
                <p className="description opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum sodales, elementum nunc non, vulputate augue. Vivamus tempus semper risus ac iaculis.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                  <i className="ni ni-favourite-28"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                Weddings
                </h6>
                <p className="description opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum sodales, elementum nunc non, vulputate augue. Vivamus tempus semper risus ac iaculis.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                <i class="fas fa-hotel"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                Hotels
                </h6>
                <p className="description opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum sodales, elementum nunc non, vulputate augue. Vivamus tempus semper risus ac iaculis.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                <i class="fas fa-calendar"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                Corporate Events
                </h6>
                <p className="description opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum sodales, elementum nunc non, vulputate augue. Vivamus tempus semper risus ac iaculis. 
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                <i class="fas fa-mask"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                Festivals
                </h6>
                <p className="description opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum sodales, elementum nunc non, vulputate augue. Vivamus tempus semper risus ac iaculis.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature1;
