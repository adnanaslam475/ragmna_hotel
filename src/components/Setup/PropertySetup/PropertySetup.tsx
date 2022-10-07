import React from 'react'
import { Tabs, Tab, Row, Col, Nav, Card, Form, Collapse, ListGroup, ListGroupItem, Container, Badge } from 'react-bootstrap';
import { CarouselwithTopRightIndicator } from '../../../Data/bootstrap/DataCarousels';
import { VerticalOrientationWizard } from '../../../Data/Pages/Forms/DataFormWizard';
import NotificationList from '../../pages/NotificationList/NotificationList';
import Checkout from '../../E-commerce/Checkout/Checkout';
import './PropertySetup.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Invoice from '../../pages/Extension/Invoice/Invoice';
import Gallery from '../../pages/Gallery/Gallery';
import PropertyInfo from './PropertyInfo/PropertyInfo';


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
                                            <PropertyInfo/>
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
                                        <Tab.Pane eventKey="four">
                                            <Checkout />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="five">
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title>Policies</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body className="scroll">
                                                        {/* <!-- content --> */}
                                                        <PerfectScrollbar>
                                                            <div className="content-1 vscroll h-300">
                                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                                                    going to use a passage of Lorem Ipsum</p>
                                                                <p> you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                                                                    on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                                                                    free from repetition, injected humour, or non-characteristic words etc</p>
                                                                <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                                                                <p>adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                                                    ut aliquid ex ea commodi consequatur</p>
                                                                <p>explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                                    the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                                                                <p> you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                                                                    on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                                                                    free from repetition, injected humour, or non-characteristic words etc</p>
                                                                <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                                                                <p>adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                                                    ut aliquid ex ea commodi consequatur</p>
                                                                <p>explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                                    the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                                                            </div>
                                                        </PerfectScrollbar>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='six'>
                                            <Invoice/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='seven'>
                                            <Gallery/>
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