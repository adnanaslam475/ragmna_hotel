import React from 'react';
import styles from './Sweet.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Row, Col, Card } from 'react-bootstrap';
import { CongratulationAlert, WarningAlert, DangerAlert, InfoAlert, TitlewithAlert, ImagewithAlert, TimmerwithAlert } from '../../../Data/App/DataSweetAlert';
import { SimpleAlert } from './../../../Data/App/DataSweetAlert';



export default class Sweet extends React.Component {

  render() {

    return (
      <div className={styles.Sweet} >

        <PageHeader titles="Sweet Alert" active="Sweet Alert" items={['Apps']} />

        {/* <!-- Row --> */}
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Sample Sweet Alerts</Card.Title>
              </Card.Header>
              <Card.Body>
                <CongratulationAlert />
                <WarningAlert />
                <DangerAlert />
                <InfoAlert />

              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Forms Sweet-alert</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="form-group">
                  <label>Title</label>
                  <input type='text' className="form-control" placeholder='Title text' id='title' />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <input type='text' className="form-control" placeholder='Your message' id='message' />
                </div>
                <SimpleAlert />
                <TitlewithAlert />
                <ImagewithAlert />
                <TimmerwithAlert />
              </Card.Body>
            </Card>
          </Col>
        </Row >
        {/* <!-- End Row --> */}
      </div >

    )
  };
}