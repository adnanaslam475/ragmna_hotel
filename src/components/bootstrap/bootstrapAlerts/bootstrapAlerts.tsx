import React, { FC } from 'react';
import styles from './Alerts.module.scss';
import { Card, Row, Col } from 'react-bootstrap';
import { Removeicon, Alertdanger, Alertwarning, Alertsuccess, Alertsecondary, DefaultAlert, LinkAlert, IconAlert, MultiIconAlert, AvatarAlert, IconDissmissbleAlert } from '../../../Data/bootstrap/booststrapAlertsData';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

interface BootstrapAlertsProps { }

const BootstrapAlerts: FC<BootstrapAlertsProps> = () => (
  <div className={styles.Alerts}>
    <PageHeader titles="Alerts" active="Alerts" items={['Componets']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={3} sm={6}>
        <Alertdanger />
      </Col>

      <Col xl={3} sm={6}>
        <Alertwarning />
      </Col>

      <Col xl={3} sm={6}>
        <Alertsuccess />

      </Col>
      <Col xl={3} sm={6}>
        <Alertsecondary />
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Default alerts</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">className="alert alert-primary|secondary|success|info|warning|danger"</code> use one of the <b>required</b> className.</p>
              <div className="example">
                <DefaultAlert />

              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Links in alerts</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-link</code> className to quickly provide matching colored links within any alert</p>
              <div className="example">
                <LinkAlert />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Alert with icon</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-icon</code> className.</p>
              <div className="example">
                <IconAlert />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Alert with avatar</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
              <div className="example">
                <AvatarAlert />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}

    {/* <!-- ROW-4 OPEN --> */}
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Alerts With Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
              <div className="example">
                <MultiIconAlert />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title className="mb-0">Alerts With Icons Dismissing</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-dismissible</code> className.</p>
              <div className="example">
                <IconDissmissbleAlert />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-4 CLOSED --> */}

    {/* <!-- ROW-5 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Alerts style</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap mb-4">
              <div className="">
                <Removeicon />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-5 CLOSED --> */}

  </div>
);

export default BootstrapAlerts;
