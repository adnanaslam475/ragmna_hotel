import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { DataTabless } from '../../../Data/Pages/TablesData/TableData';

const GuestHistory = () => {
  const columns:any = [
    {
      name: "Account Number",
      selector: (row) => [row.ACCOUNT_NUMBER],
      sortable: false,
    },
    {
      name: "Account Name",
      selector: (row) => [row.ACCOUNT_NAME],
      sortable: true,
    },
    {
      name: "Account Since",
      selector: (row) => [row.ACCOUNT_SINCE],
      sortable: false,
    },
    {
      name: "Reservation",
      selector: (row) => [row.RESERVATION],
      sortable: true,
    },
    {
      name: "status",
      selector: (row) => [row.STATUS],
      sortable: true,
    }
  ];
  return (
    <div><Row className="row-sm">
    <Col lg={12}>
      <Card>
        <Card.Header>
          <Card.Title as='h3'>GuestHistory</Card.Title>
        </Card.Header>
        <Card.Body>
            <div>
              <DataTabless/>
             </div>
        </Card.Body>
      </Card>
    </Col>
  </Row></div>
  )
}

export default GuestHistory