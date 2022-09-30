import React, { FC } from 'react';
import styles from './DataTable.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicDataTable, ResponsiveDataTable, DataTabless } from './../../../../Data/Pages/TablesData/TableData';


interface DataTableProps { }

const DataTable: FC<DataTableProps> = () => (
  <div className={styles.DataTable}>
    <PageHeader titles="Data Table" active="Data Table" items={['Tables']} />
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Datatable</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicDataTable />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Responsive DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <ResponsiveDataTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Deleted Row DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <DataTabless/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

export default DataTable;
