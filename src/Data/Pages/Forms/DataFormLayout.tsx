import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Nav, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap';

export function DataForm() {
    return (

        <div className="users">


            <Tab.Container id="left-tabs-example" defaultActiveKey="creditcard">

                <Nav variant="pills" >
                    <Nav.Item>
                        <Nav.Link eventKey="creditcard"><i className="fa fa-credit-card me-2"></i>CreditCard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Paypal"><i className="fa fa-paypal me-2"></i>Paypal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="BT"><i className="fa fa-university me-2"></i>Bank Transfer</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="creditcard">
                        <div className="bg-danger-transparent-2 text-danger py-2 mb-4 mt-5" role="alert">Please Enter Valid Details</div>
                        <Form.Group>
                            <Form.Label >CardHolder Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Card number</Form.Label>
                            <InputGroup>
                                <FormControl type="text" placeholder="Search for..." />
                                <Button variant='secondary' id="button-addon" >
                                    <i className="fa fa-cc-visa"></i>&nbsp;<i className="fa fa-cc-amex"></i>&nbsp;<i className="fa fa-cc-mastercard"></i>
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <Row>
                            <Col sm={8}>
                                <Form.Group>
                                    <Form.Label>Expiration</Form.Label>
                                    <InputGroup>
                                        <FormControl type="number" placeholder="MM" name="Month" />
                                        <FormControl type="number" placeholder="YY" name="Year" />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Label>CVV&nbsp;
                                        <OverlayTrigger placement="top"
                                            overlay={<Tooltip >CVV is the last three digits on the back of your credit card</Tooltip>}><i className="fa fa-question-circle"></i></OverlayTrigger>
                                    </Form.Label>
                                    <Form.Control type="number" className="form-control" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button className='mt-4' variant='primary' size='lg'>Confirm</Button>

                    </Tab.Pane>
                    <Tab.Pane eventKey="Paypal">

                        <div className="tab-pane" id="tab21">
                            <p className='mt-5'>Paypal is easiest way to pay online</p>
                            <p><Button variant='primary'><i className="fa fa-paypal"></i> Log in my Paypal</Button></p>
                            <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                        </div>

                    </Tab.Pane>
                    <Tab.Pane eventKey="BT">

                        <div className="tab-pane" id="tab22">
                            <p className='mt-5'>Bank account details</p>
                            <dl className="card-text">
                                <dt>BANK: </dt>
                                <dd> THE UNION BANK 0456</dd>
                            </dl>
                            <dl className="card-text">
                                <dt>Account number: </dt>
                                <dd> 67542897653214</dd>
                            </dl>
                            <dl className="card-text">
                                <dt>IBAN: </dt>
                                <dd>543218769</dd>
                            </dl>
                            <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                        </div>

                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>
        </div>

    )
};

