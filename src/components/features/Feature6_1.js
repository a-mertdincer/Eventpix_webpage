import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature6() {
  return (
    <>
      <div className="section features-6">
        <Container>
          <Row className="align-items-center">
          <Col className="mx-md-auto" lg="6" xs="10">
              <img
                alt="..."
                className="ml-lg-5"
                src={require("../../assets/img/ill/stock1.jpg")}
                width="100%"
              ></img>
            </Col>
            <Col lg="6">
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-primary">
                <i class="fas fa-calendar-plus"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Create Events</h5>
                  <p>
                  Create events to upload photos of attendees in a few simple steps.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-primary">
                <i class="far fa-images"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Upload the Photos</h5>
                  <p>
                  Easily upload photos through a 100% secure panel for every event.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-primary">
                <i class="fas fa-share-alt"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Distribute the Photos</h5>
                  <p>
                  EventPix recognizes faces, matches them with attendees in the event, and shares them instantly and privately.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature6;
