import React from "react";
import googlePlayLogo from "../../assets/img/icons/common/google-play-badge.svg";
import appStoreLogo from "../../assets/img/icons/common/apple-app-store-badge.svg";
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
                    Event-based Photo Distribution and Sales Platform that works
                    with AI
                  </h1>
                  <br></br>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img
                    src={googlePlayLogo}
                    alt={"logo"}
                    width={190}
                    height={50}
                    margin={25}
                  />
                  </a>
                  <a href="https://www.youtube.com/watch?v=G1IbRujko-A">
                  <img
                    src={appStoreLogo}
                    alt={"logo"}
                    width={190}
                    height={54}
                  />
                  </a>
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
