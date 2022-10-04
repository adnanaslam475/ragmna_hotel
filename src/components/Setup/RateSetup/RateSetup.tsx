import React from "react";
import { Card, Col, Nav, Tab, Table, Row } from "react-bootstrap";
import './RateSetup.scss'

const RateSetup = () => {
  return (
    <div>
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
                      <Nav.Link eventKey="four"><i className="fe fe-user me-1"></i>Permotion Rate</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="tab-content">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className='tab-data' >
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
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default RateSetup;
