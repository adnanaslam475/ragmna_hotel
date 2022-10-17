import {
  Tabs,
  Tab,
  Row,
  Col,
  Nav,
  Card,
  Form,
  Collapse,
  ListGroup,
  ListGroupItem,
  Container,
  Badge,
} from "react-bootstrap";
import { VerticalOrientationWizard } from "../../Data/Pages/Forms/DataFormWizard";
import "./GuestServices.scss";

const GuestServices = () => {
  return (
    <div>
      <Col xl={12}>
        <Card className="card-bg">
          <Card.Body>
            <div className="panel panel-secondary">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="tab-name">
                  <Nav
                    variant="pills"
                    className="panel-tabs nav-tabs panel-secondary"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <i className="fe fe-user me-1"></i>Room Status
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <i className="fe fe-calendar me-1"></i>Tast List
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <i className="fe fe-settings me-1"></i>Room Maintenance
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="tab-content">
                  <Tab.Content>
                    <Tab.Pane eventKey="first"></Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col sm={12} lg={6}>
                          <Card>
                            <Card.Header>
                              <Card.Title>Basic List Group</Card.Title>
                            </Card.Header>
                            <Card.Body>
                              <div className="">
                                <ListGroup>
                                  <ListGroupItem>Cras justo odio</ListGroupItem>
                                  <ListGroupItem>
                                    Dapibus ac facilisis in
                                  </ListGroupItem>
                                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                                  <ListGroupItem>
                                    Porta ac consectetur ac
                                  </ListGroupItem>
                                  <ListGroupItem>
                                    Vestibulum at eros
                                  </ListGroupItem>
                                </ListGroup>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col sm={12} lg={6}>
                          <Card>
                            <Card.Header>
                              <Card.Title>Active List item</Card.Title>
                            </Card.Header>
                            <Card.Body>
                              <div className="">
                                <ListGroup>
                                  <ListGroupItem active>
                                    Cras justo odio
                                  </ListGroupItem>
                                  <ListGroupItem>
                                    Dapibus ac facilisis in
                                  </ListGroupItem>
                                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                                  <ListGroupItem>
                                    Porta ac consectetur ac
                                  </ListGroupItem>
                                  <ListGroupItem>
                                    Vestibulum at eros
                                  </ListGroupItem>
                                </ListGroup>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <VerticalOrientationWizard />
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

export default GuestServices;
