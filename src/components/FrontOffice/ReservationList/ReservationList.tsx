import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { DataTabless } from '../../../Data/Pages/TablesData/TableData';
import { TableData } from '../FrontOfficeTypes';
import './ReservationList.scss'

const ReservationList = () => {
  const columns: any[] = [
    {
      name: "PROPERTY",
      selector: (row) => [row.PROPERTY],
      sortable: false,
    },
    {
      name: "GUEST NAME",
      selector: (row) => [row.GUEST_NAME],
      sortable: true,
    },
    {
      name: "ACCOUNT NAME",
      selector: (row) => [row.ACCOUNT_NAME],
      sortable: false,
    },
    {
      name: "RES#",
      selector: (row) => [row.RES],
      sortable: true,
    },
    {
      name: "ADULTS",
      selector: (row) => [row.ADULTS],
      sortable: true,
    },
    {
      name: "CHILD",
      selector: (row) => [row.CHILD],
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => [row.STATUS],
      sortable: false,
    },
    {
      name: "ROOM",
      selector: (row) => [row.ROOM],
      sortable: false,
    },
    {
      name: "ARRIVE",
      selector: (row) => [row.ARRIVE],
      sortable: false,
    },
    {
      name: "DEPART",
      selector: (row) => [row.DEPART],
      sortable: false,
    },
    {
      name: "NIGHT",
      selector: (row) => [row.NIGHT],
      sortable: false,
    },
    {
      name: "TASK",
      selector: (row) => [row.TASK],
      sortable: false,
    },
  ];
  const resTableDataItems:TableData[] = [
    {
      PROPERTY: 'Ocean Villas',
      GUEST_NAME: 'Pamela Roberts',
      ACCOUNT_NAME: '-',
      RES: 22138416,
      ADULTS: 1,
      CHILD: 0,
      STATUS: 'Reserved',
      ROOM: 'STDt:217',
      ARRIVE: 'Oct 23 2022',
      DEPART:'Oct 24 2022',
      NIGHT: 1,
      TASK: '123'
    },
    {
      PROPERTY: 'Ocean Villas',
      GUEST_NAME: 'Roberts Maguire',
      ACCOUNT_NAME: '-',
      RES: 22138398,
      ADULTS: 1,
      CHILD: 0,
      STATUS: 'Reserved',
      ROOM: 'DLXq:301',
      ARRIVE: 'Oct 18 2022',
      DEPART:'Oct 19 2022',
      NIGHT: 1,
      TASK: '123'
    },
    {
      PROPERTY: 'Ocean Villas',
      GUEST_NAME: 'First Last',
      ACCOUNT_NAME: 'New group',
      RES: 23214557,
      ADULTS: 2,
      CHILD: 0,
      STATUS: 'Reserved',
      ROOM: 'DLXq:301',
      ARRIVE: 'Oct 01 2022',
      DEPART:'Oct 10 2022',
      NIGHT: 9,
      TASK: '123'
    }
  ]
  return (
    <div>
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Reservation List</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive Reservation-table">
              <DataTabless
                resTableDataItems={resTableDataItems}
                columns={columns} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row></div>
  )
}

export default ReservationList