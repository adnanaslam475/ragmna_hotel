import React from 'react'
import { Button, Card, Nav, Tab } from 'react-bootstrap'
import PropertyInfo from '../PropertyInfo'

interface AddPropertyProps {
    setAddProperty?: React.Dispatch<React.SetStateAction<boolean>>
}

const AddProperty = (props: AddPropertyProps) => {

    const {
        setAddProperty
    } = props

    return (
        <React.Fragment>
             <Card className="card-bg">
                <Card.Body>
            <div className="panel panel-secondary">
                <Tab.Container id="left-tabs-example p-0" defaultActiveKey="first">
                    <div className='tab-name d-flex justify-content-between'>
                        <Nav variant="pills" className='panel-tabs nav-tabs panel-secondary'>
                            <Nav.Item>
                                <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Property Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><i className="fe fe-user me-1"></i>System configuration</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><i className="fe fe-calendar me-1"></i>Reservation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four"><i className="fe fe-settings me-1"></i>Check-in/Check-out</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="five"><i className="fe fe-user me-1"></i>Policies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="six"><i className="fe fe-calendar me-1"></i>Tax Setup</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seven"><i className="fe fe-settings me-1"></i>Amenities</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/* <div>
                            <Button onClick={() => setAddProperty(false)}>
                                close
                            </Button>
                        </div> */}
                    </div>
                    <div className='tab-content'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <PropertyInfo />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                            </Tab.Pane>
                            <Tab.Pane eventKey='five'>
                            </Tab.Pane>
                            <Tab.Pane eventKey='six'>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
                    </div>
                </Card.Body>
                </Card>
        </React.Fragment>
    )
}

export default AddProperty