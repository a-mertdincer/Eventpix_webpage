import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Header4() {
  return (
    <>
      <header className="header-4 skew-separator">
        <div className="header-wrapper">
          <div className="page-header header-video">
            <div className="overlay"></div>
            <video
              autoPlay="autoPlay"
              loop="loop"
              muted="muted"
              playsInline="playsInline"
            >
              <source
                src={require("../../assets/videos/Header.mp4")}
                type="video/mp4"
              ></source>
            </video>
            <Container className="text-center">
              <Row>
                <Col className="mx-auto" lg="7">
                  <h1 className="video-text">EventPix</h1>
                  <h1 className="display-4 text-white">
                  Event-based Photo Distribution and Sales Platform that works with AI
                  </h1>
                  <Button
                    className="btn-icon mt-3 mb-sm-0"
                    color="warning"
                    href=""
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play"></i>
                    </span>
                    <span className="btn-inner--text">Click Me</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header4;
