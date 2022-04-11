import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  Container,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing1() {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <>
      <div className="pricing-1" id="pricing-1">
        <Container>
          <Row>  
          <Col className="mx-auto text-center mb-3" md="6">
              <h3 className="display-3">Pricing and Storage Plans</h3>
              <p className="lead">
              All of our plans include every feature above. Need more or less storage? You can constantly update your plan later.
              </p>
              <div className="section-space"></div>
            </Col>
          </Row>
          <div className="space-100"></div>
          <Row>
            <div className="nav-wrapper mx-auto mr-3 mb-3">
              <Nav
                className="nav-pills-info nav-fill flex-column flex-md-row"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " +
                      (activeTab === "tab1" ? "active" : "")
                    }
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
                    className={
                      "mb-sm-3 mb-md-0 " +
                      (activeTab === "tab2" ? "active" : "")
                    }
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    Yearly
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Row>
          <TabContent className="tab-space" activeTab={activeTab}>
          <TabPane tabId="tab1">
          <Row>
            <Col md="4">
            <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Starter
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">₺50.00</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">500 MB</b>{" "}
                              <span>Cloud Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">10</b>{" "}
                              <span>Events</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">1000</b>{" "}
                              <span>AI-Aimed Detection</span>
                            </li>
                            <li className="align-items-center">
                              <span>Complete documentation</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
            </Col>
            <Col md="4">
            <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Premium
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">₺500.00</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                          <li className="align-items-center">
                              <b className="text-primary">10 GB</b>{" "}
                              <span>Cloud Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">50</b>{" "}
                              <span>Events</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">2500</b>{" "}
                              <span>AI-Aimed Detection</span>
                            </li>
                            <li className="align-items-center">
                              <span>Complete documentation</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
            </Col>
            <Col md="4">
            <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Enterprise
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">₺5000.00</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                          <li className="align-items-center">
                              <b className="text-primary">100 GB</b>{" "}
                              <span>Cloud Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">500</b>{" "}
                              <span>Events</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">500000</b>{" "}
                              <span>AI-Aimed Detection</span>
                            </li>
                            <li className="align-items-center">
                              <span>Complete documentation</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
            </Col>
          </Row>
          </TabPane>
          <TabPane tabId="tab2">
          <Row>
            <Col md="4">
            <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Starter
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">₺500.00</div>
                          <span>per year</span>
                          <ul className="list-unstyled my-4">
                          <li className="align-items-center">
                              <b className="text-primary">500 MB</b>{" "}
                              <span>Cloud Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">10</b>{" "}
                              <span>Events</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">1000</b>{" "}
                              <span>AI-Aimed Detection</span>
                            </li>
                            <li className="align-items-center">
                              <span>Complete documentation</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
            </Col>
            <Col md="4">
            <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Premium
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">₺5000.00</div>
                          <span>per year</span>
                          <ul className="list-unstyled my-4">
                          <li className="align-items-center">
                              <b className="text-primary">10 GB</b>{" "}
                              <span>Cloud Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">50</b>{" "}
                              <span>Events</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">2500</b>{" "}
                              <span>AI-Aimed Detection</span>
                            </li>
                            <li className="align-items-center">
                              <span>Complete documentation</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
            </Col>
            <Col md="4">
            <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Enterprise
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">₺50000.00</div>
                          <span>per year</span>
                          <ul className="list-unstyled my-4">
                          <li className="align-items-center">
                              <b className="text-primary">100 GB</b>{" "}
                              <span>Cloud Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">500</b>{" "}
                              <span>Events</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">500000</b>{" "}
                              <span>AI-Aimed Detection</span>
                            </li>
                            <li className="align-items-center">
                              <span>Complete documentation</span>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
            </Col>
          </Row>
          </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default Pricing1;
