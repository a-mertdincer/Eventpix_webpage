import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing5() {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <>
      <section
        className="pricing-5"
        id="pricing-6"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/ill/bg_pricing5.svg") + ")",
        }}
      >
        <Container className="pt-5">
        <Row>
            <Col className="mx-auto text-center mb-5" md="6">
              <h2 className="title">Pick the best plan for you</h2>
              <h4 className="description">
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h4>
              <div className="section-space"></div>
            </Col>
          </Row>
          <Row>
              <Nav className="nav-pills-primary my-4" pills role="tablist">
                <NavItem>
                  <NavLink
                    className={activeTab === "tab1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab1");
                    }}
                  >
                    Monthly
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "tab2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    Annually
                  </NavLink>
                </NavItem>
              </Nav>
              <p className="lead mt-0">
              All of our plans include every feature above. Need more or less storage? You can constantly update your plan later.
              </p>
            <Col className="ml-auto mr-auto" lg="7" md="6">
              <TabContent className="tab-space" activeTab={activeTab}>
                <TabPane tabId="tab1">
                  <Row>
                    <Col md="6">
                    <Card className="card-pricing bg-white border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h6 className="text-uppercase ls-1 text-white py-3 mb-0">
                    Starter
                  </h6>
                </CardHeader>
                <CardBody>
                  <div className="display-2 text-white">₺50.00</div>
                  <span className="text-white">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-info">
                            <i className="ni ni-book-bookmark"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Complete documentation
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-info">
                            <i className="ni ni-diamond"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-info">
                            <i className="ni ni-chart-pie-35"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            2GB cloud storage
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Premium
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$59</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">50GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">100</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Uc
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$59</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">50GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">100</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="tab2">
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Gold
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$100</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">200GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Unlimited</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Platinum
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$135</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">500GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Unlimited</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">No time</b>{" "}
                              <span>Tracking</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Pricing5;
