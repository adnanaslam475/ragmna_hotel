import React, { FC } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import styles from './Loaders.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { LoaderwithDoublebounce, LoaderwithCube, LoaderwithSpinner, LoaderwithRing, LoaderwithHourGlass, LoaderwithHeart } from '../../../Data/App/LoadersData';


interface LoadersProps { }

const Loaders: FC<LoadersProps> = () => (
  <div className={styles.Loaders}>
    <PageHeader titles="Loaders" active="Loaders" items={['Apps']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col lg={3} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Border & Growing Spinners</Card.Title>
          </Card.Header>
          <Card.Body>
            <Spinner animation="border" className='me-2' />
            <Spinner animation="grow" className='me-2' />
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Border & Growing Colors Spinners</Card.Title>
          </Card.Header>
          <Card.Body>

            <Spinner animation="border" variant="primary" className='me-3' />
            <Spinner animation="border" variant="secondary" className='me-3' />
            <Spinner animation="border" variant="success" className='me-3' />
            <Spinner animation="border" variant="danger" className='me-3' />
            <Spinner animation="border" variant="warning" className='me-3' />
            <Spinner animation="border" variant="info" className='me-3' />
            <Spinner animation="border" variant="light" className='me-3' />
            <Spinner animation="border" variant="dark" className='me-3' />

            <Spinner animation="grow" variant="primary" className='me-3' />
            <Spinner animation="grow" variant="secondary" className='me-3' />
            <Spinner animation="grow" variant="success" className='me-3' />
            <Spinner animation="grow" variant="danger" className='me-3' />
            <Spinner animation="grow" variant="warning" className='me-3' />
            <Spinner animation="grow" variant="info" className='me-3' />
            <Spinner animation="grow" variant="light" className='me-3' />
            <Spinner animation="grow" variant="dark" className='me-3' />
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col lg={3} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Size Spinners</Card.Title>
          </Card.Header>
          <Card.Body>
            <Spinner animation="grow" size="sm" variant="danger" className='me-2' />
            <Spinner animation="border" size="sm" variant="danger" className='me-2' />
            <Spinner animation="grow" variant="secondary" className='me-2' />
            <Spinner animation="border" variant="secondary" className='me-2' />
            <Spinner animation="grow" variant="primary" className='me-2 h-7 w-7' />
            <Spinner animation="border" variant="primary" className='me-2 h-7 w-7' />

          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Buttons Spinners</Card.Title>
          </Card.Header>
          <Card.Body>
            <Button variant="primary" className='m-1'><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /></Button>
            <Button variant="primary" className='m-1'><Spinner className='me-1' as="span" animation="border" size="sm" role="status" aria-hidden="true" />Loading...</Button>
            <Button variant="primary" className='m-1'><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /></Button>
            <Button variant="primary" className='m-1'><Spinner className='me-1' as="span" animation="grow" size="sm" role="status" aria-hidden="true" />Loading...</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col md={12} lg={6} xl={4}>
        <LoaderwithDoublebounce />
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6} xl={4}>
        <LoaderwithCube />
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6} xl={4}>
        <LoaderwithSpinner />
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6} xl={4}>
        <LoaderwithRing />
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6} xl={4}>
        <LoaderwithHourGlass />
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6} xl={4}>
        <LoaderwithHeart />
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
  </div>
);

export default Loaders;
