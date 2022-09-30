import React from 'react'
import { Tabs, Tab, Row, Col, Nav, Card, Form, Collapse, ListGroup, ListGroupItem, Container, Badge } from 'react-bootstrap';
import { VerticalOrientationWizard } from '../../../Data/Pages/Forms/DataFormWizard';
import NotificationList from '../../pages/NotificationList/NotificationList';
import './PropertySetup.scss'

const PropertySetup = () => {
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
                                            <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Property Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>System configuration</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Reservation</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="four"><i className="fe fe-user me-1"></i>Check-in/Check-out</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="five"><i className="fe fe-calendar me-1"></i>Policies</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="six"><i className="fe fe-settings me-1"></i>Tax Setup</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="seven"><i className="fe fe-settings me-1"></i>Amenities</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </div>
                                <div className='tab-content'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <NotificationList />
                                        </Tab.Pane>
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
                                                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                                                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                                                                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                                </ListGroup>

                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                {/* <!-- COL END --> */}
                                                <Col sm={12} lg={6}>
                                                    <Card>
                                                        <Card.Header>
                                                            <Card.Title>Active List item</Card.Title>
                                                        </Card.Header>
                                                        <Card.Body>
                                                            <div className="">

                                                                <ListGroup>
                                                                    <ListGroupItem active>Cras justo odio</ListGroupItem>
                                                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                                                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                                                                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                                </ListGroup>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                {/* <!-- COL END --> */}
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
    )
}

export default PropertySetup