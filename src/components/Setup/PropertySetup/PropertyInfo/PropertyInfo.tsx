import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CarouselwithTopRightIndicator } from '../../../../Data/bootstrap/DataCarousels'
import './PropertyInfo.scss'
import { useGetPropertyInfoQuery } from './propertyInfoApi'

const PropertyInfo = () => {

    const { data, isError, isLoading } = useGetPropertyInfoQuery()
    return (
        <div>
            <Row>
                <div className='d-flex justify-content-end'>
                <Button>Add Property</Button>
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
    )
}

export default PropertyInfo