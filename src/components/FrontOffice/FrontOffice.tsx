import React from 'react';
import './FrontOffice.scss'
import { Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import ReservationList from './ReservationList/ReservationList';
import GuestHistory from './GuestHistory/GuestHistory';
import DefaultCalender from '../apps/DefaultCalender/DefaultCalender';

const FrontOffice = () => {
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
                                                <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Reservations</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>Calendar</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Guest History</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className='tab-data'>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <ReservationList />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <DefaultCalender/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <GuestHistory />
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

export default FrontOffice;