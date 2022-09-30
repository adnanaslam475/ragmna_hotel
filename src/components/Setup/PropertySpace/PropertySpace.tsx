import React from 'react'
import './PropertySpace.scss'
import { Tabs, Tab, Row, Col, Nav, Card, Form, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarouselwithTopRightIndicator } from '../../../Data/bootstrap/DataCarousels';

const PropertySpace = () => {
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
                                                <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Rooms</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>Section</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Amenities</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className='tab-content'>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    <Col md={12} lg={12}>
                                                        <Card>
                                                            <Card.Body>
                                                                <div className="">
                                                                    <Row>
                                                                        <Col md={6} xl={3}>
                                                                            <Link to="#" className="thumbnail ">
                                                                                <img src={require("../../../assets/images/media/1.jpg")} alt="thumb1" className="thumbimg" />
                                                                            </Link>
                                                                        </Col>
                                                                        <Col md={6} xl={3}>
                                                                            <Link to="#" className="thumbnail">
                                                                                <img src={require("../../../assets/images/media/2.jpg")} alt="thumb1" className="thumbimg" />
                                                                            </Link>
                                                                        </Col>
                                                                        <Col md={6} xl={3}>
                                                                            <Link to="#" className="thumbnail">
                                                                                <img src={require("../../../assets/images/media/3.jpg")} alt="thumb1" className="thumbimg" />
                                                                            </Link>
                                                                        </Col>
                                                                        <Col md={6} xl={3}>
                                                                            <Link to="#" className="thumbnail">
                                                                                <img src={require("../../../assets/images/media/5.jpg")} alt="thumb1" className="thumbimg" />
                                                                            </Link>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
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
    )
}

export default PropertySpace