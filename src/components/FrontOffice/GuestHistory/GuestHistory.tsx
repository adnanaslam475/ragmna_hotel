import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { DataTabless } from '../../../Data/Pages/TablesData/TableData';

const GuestHistory = () => {
  const columns: any = [
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
  const guestTableDataItems = [
    {
      ACCOUNT_NUMBER: 867,
      ACCOUNT_NAME: 'Dany Stormborn',
      ACCOUNT_SINCE: 'sep 16,2019',
      RESERVATION: 1,
      STATUS: 'Active'
    },
    {
      ACCOUNT_NUMBER: 897,
      ACCOUNT_NAME: 'Joe Smith',
      ACCOUNT_SINCE: 'Dec 11,2019',
      RESERVATION: 2,
      STATUS: 'Active'
    }, 
    {
      ACCOUNT_NUMBER: 1068,
      ACCOUNT_NAME: 'Garry Streep',
      ACCOUNT_SINCE: 'Jun 16,2021',
      RESERVATION: 1,
      STATUS: 'Active'
    }
  ]
  return (
    <div><Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>GuestHistory</Card.Title>
          </Card.Header>
          <Card.Body>
            <div>
              <DataTabless
                resTableDataItems={guestTableDataItems}
                columns={columns} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row></div>
  )
}

export default GuestHistory