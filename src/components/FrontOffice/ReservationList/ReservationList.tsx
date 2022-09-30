import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { DataTabless } from '../../../Data/Pages/TablesData/TableData';

const ReservationList = () => {
  return (
    <div><Row className="row-sm">
    <Col lg={12}>
      <Card>
        <Card.Header>
          <Card.Title as='h3'>Reservation List</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive">
            <DataTabless/>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row></div>
  )
}

export default ReservationList