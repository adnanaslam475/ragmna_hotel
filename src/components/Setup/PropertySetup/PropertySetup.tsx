import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CarouselwithTopRightIndicator } from '../../../Data/bootstrap/DataCarousels'
import './PropertySetup.scss'
import { useNavigate } from 'react-router-dom'
import { useGetPropertyInfoQuery } from './AddProperty/propertyInfoApi'

const PropertySetup = () => {
    const { data, isError, isLoading } = useGetPropertyInfoQuery()
    const [addProperty, setAddProperty] = React.useState<boolean>(false)
      let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/propertysetup/add-property`;
    navigate(path);
  };
    return (
        <React.Fragment>
            <Card className='mt-6'>
                <Card.Body>
                        <div>
                            <Row>
                                <div className='d-flex justify-content-end'>
                                    <Button onClick={() => { RouteChange() }}>Add Property</Button>
                                </div>
                            </Row>
                            <Row>
                                {
                                    data?.data.map((item, index) => {
                                        return (
                                            <Col key={index} lg={6} xl={4}>
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title as="h3">{item.name}</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body className="h-100">
                                                        <div id="carousel-indicators2" className="carousel slide" data-bs-ride="carousel">
                                                            <CarouselwithTopRightIndicator />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }

                            </Row>
                        </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default PropertySetup