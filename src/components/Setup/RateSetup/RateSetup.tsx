import React from "react";
import { Card, Col, Nav, Tab, Table, Row ,ListGroup,Button,Badge} from "react-bootstrap";
import './RateSetup.scss'

const RateSetup = () => {
  return (
    <div>
      <Row>
        <Col xl={12}>
          <Card className='card-bg'>
            <Card.Body>
              <div className="panel panel-secondary">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className='tab-name'>
                    <Nav variant="pills" className='panel-tabs nav-tabs panel-secondary'>
                      <Nav.Item>
                        <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Base Rate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>Per Day Rate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Season Rate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="forth"><i className="fe fe-settings me-1"></i>Permotion Rate</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className='tab-data'>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col xl={12}>
                            <Card className="card-bg">
                              <Card.Header>
                                <Card.Title as='h3'>Base Rate</Card.Title>
                              </Card.Header>
                              <Card.Body>
                                <div className="table-responsive">
                                  <Table className="border text-nowrap text-md-nowrap mb-0">
                                    <thead className="table-primary">
                                      <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Salary</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Joan Powell</td>
                                        <td>Associate Developer</td>
                                        <td>$450,870</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Gavin Gibson</td>
                                        <td>Account manager</td>
                                        <td>$230,540</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Julian Kerr</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>$55,300</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Cedric Kelly</td>
                                        <td>Accountant</td>
                                        <td>$234,100</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Card.Title as='h4' className="mt-4"></Card.Title>
                          <Col sm={6} xl={3} md={6} lg={6}>
                            <div className="panel price panel-color">
                              <div className="ps-5 d-flex">
                                <div>
                                  <h3 className="pb-0 text-secondary">Team</h3>
                                  <p>per agent per month</p>
                                </div>
                                <div className="panel-body ms-auto">
                                  <p className="lead py-0"><strong>$25 </strong>/ month</p>
                                </div>
                              </div>
                              <ListGroup variant="flush" className="pb-5">
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> 3 Free</strong> Domain Name</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong>4 </strong> One-Click Apps</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> 2 </strong> Databases</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
                                <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
                              </ListGroup>
                              <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
                                <Button variant='secondary' className="btn-block btn-pill">Purchase Now!</Button>
                              </div>
                            </div>
                          </Col>
                          {/* <!-- COL-END --> */}
                          <Col sm={6} xl={3} md={6} lg={6}>
                            <div className="panel price panel-color border border-primary p-0 pb-1">
                              <div className="p-0 ps-5 d-flex">
                                <div>
                                  <h3 className="pb-0 text-primary">Personal</h3>
                                  <p>per agent per month</p>
                                </div>
                                <div className="panel-body ms-auto">
                                  <p className="lead py-0"><strong>$15 </strong>/ month</p>
                                </div>
                              </div>
                              <ListGroup variant="flush" className="pb-5">
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 2 Free</strong> Domain Name</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>3 </strong> One-Click Apps</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 1 </strong> Databases</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
                                <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
                              </ListGroup>
                              <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
                                <Button variant='primary' className="btn-block btn-pill">Purchase Now!</Button>
                              </div>
                            </div>
                          </Col>
                          {/* <!-- COL-END --> */}
                          <Col sm={6} xl={3} md={6} lg={6}>
                            <div className="panel price panel-color">
                              <div className="ps-5 d-flex">
                                <div>
                                  <h3 className="pb-0 text-danger">Corporate</h3>
                                  <p>per agent per month</p>
                                </div>
                                <div className="panel-body ms-auto">
                                  <p className="lead py-0"><strong>$35 </strong>/ month</p>
                                </div>
                              </div>
                              <ListGroup variant="flush" className="pb-5">
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 4 Free</strong> Domain Name</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>6 </strong> One-Click Apps</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
                                <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
                              </ListGroup>
                              <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
                                <Button variant='danger' className="btn-block btn-pill">Purchase Now!</Button>
                              </div>
                            </div>
                          </Col>
                          {/* <!-- COL-END --> */}
                          <Col sm={6} xl={3} md={6} lg={6}>
                            <div className="panel price panel-color">
                              <div className="ps-5 d-flex">
                                <div>
                                  <h3 className="pb-0 text-success">Business</h3>
                                  <p>per agent per month</p>
                                </div>
                                <div className="panel-body ms-auto">
                                  <p className="lead py-0"><strong>$99 </strong>/ month</p>
                                </div>
                              </div>
                              <ListGroup variant="flush" className="pb-5">
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 5 Free</strong> Domain Name</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong>8 </strong> One-Click Apps</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 2 </strong> Databases</ListGroup.Item>
                                <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
                                <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
                              </ListGroup>
                              <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
                                <Button variant='success' className="btn-block btn-pill">Purchase Now!</Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                      <Tab.Pane eventKey="forth">
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RateSetup;