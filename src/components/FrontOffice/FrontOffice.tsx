import React, { FC, useState } from 'react';
import './FrontOffice.scss'
import { Tabs, Tab, Row, Col, Nav, Card, Form, Collapse } from 'react-bootstrap';
import Select from 'react-select';
import Userlist from '../apps/Userlist/Userlist';
import DefaultCalender from '../apps/DefaultCalender/DefaultCalender';
const Country = [
    { value: "Germany", label: "Germany" },
    { value: "Canada", label: "Canada" },
    { value: "Usa", label: "Usa" },
    { value: "Aus", label: "Aus" },
];
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
                                                <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Guests</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className='tab-content'>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title as='h3'>Reservations</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col sm={6} md={6}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label>First Name <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="text" placeholder="First name" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={6} md={6}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label>Last Name <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="text" placeholder="Last name" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label >Company Name <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="text" placeholder="Company name" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label >Email address <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="email" placeholder="Email" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label >Country <span className="text-red">*</span></Form.Label>
                                                                    <Select classNamePrefix="Select" options={Country} placeholder='country' />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label>Address <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="text" placeholder="Home Address" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={6} md={6}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label>City <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="text" placeholder="City" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={6} md={6}>
                                                                <Form.Group className='mb-2'>
                                                                    <Form.Label >Postal Code <span className="text-red">*</span></Form.Label>
                                                                    <Form.Control type="number" placeholder="ZIP Code" />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <DefaultCalender/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Userlist />
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