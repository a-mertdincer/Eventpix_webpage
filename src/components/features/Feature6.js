import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature6() {
  return (
    <>
      <div className="section features-6">
       <Container>
        <h3 className="display-3">How It Works</h3>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-primary">
                <i class="fas fa-sign-in-alt"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Join an Event</h5>
                  <p>
                  Join an event using event-specific code, ensuring that each event remains private to its attendees.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-primary">
                <i class="fas fa-user"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Introduce yourself</h5>
                  <p>
                  Download the EventPix app and introduce yourself with a few quick selfies.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-primary">
                  <i class="fas fa-photo-video"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Access your Photos</h5>
                  <p>
                  Easily access your photos taken at the events you attend on EventPix and share them on social media directly.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mx-md-auto" lg="6" xs="10">
              <img
                alt="..."
                className="ml-lg-5"
                src={require("../../assets/img/ill/stock2.png")}
                width="100%"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature6;
