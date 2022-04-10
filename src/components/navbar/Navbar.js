import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            <img alt="..." src={require("../../assets/img/brand/logo.png")}></img>
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
              <UncontrolledDropdown nav>
                <DropdownToggle
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-single-copy-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">Examples</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="ni ni-tie-bow text-warning"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="ni ni-align-center text-info"></i>
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="ni ni-chart-bar-32 text-yellow"></i>
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="ni ni-square-pin text-danger"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="ni ni-planet text-purple"></i>
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/pricing-page" tag={Link}>
                    <i className="ni ni-money-coins text-success"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/ecommerce" tag={Link}>
                    <i className="ni ni-box-2 text-pink"></i>
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="ni ni-bag-17 text-primary"></i>
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="ni ni-circle-08 text-info"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/error" tag={Link}>
                    <i className="ni ni-button-power text-warning"></i>
                    404 Error Page
                  </DropdownItem>
                  <DropdownItem to="/error-500" tag={Link}>
                    <i className="ni ni-ungroup text-yellow"></i>
                    500 Error Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-tablet-button d-lg-none"></i>
                  <span className="nav-link-inner--text">App Pages</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/account-settings" tag={Link}>
                    <i className="ni ni-lock-circle-open text-muted"></i>
                    Account Settings
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="ni ni-tv-2 text-danger"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="ni ni-air-baloon text-pink"></i>
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/reset-page" tag={Link}>
                    <i className="ni ni-atom text-info"></i>
                    Reset Page
                  </DropdownItem>
                  <DropdownItem to="/invoice-page" tag={Link}>
                    <i className="ni ni-bullet-list-67 text-success"></i>
                    Invoice Page
                  </DropdownItem>
                  <DropdownItem to="/checkout-page" tag={Link}>
                    <i className="ni ni-basket text-orange"></i>
                    Checkout Page
                  </DropdownItem>
                  <DropdownItem to="/chat-page" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Chat Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
