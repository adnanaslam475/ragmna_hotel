import React, { FC } from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import styles from './Notifications.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Secondary, Success, LeftNotifier, CenterInfo, CenterDanger,Centerwarning, SuccessLeft, WarningLeft, DangerLeft, GradientSuccess, GradientWarning,GradientDanger  } from '../../../Data/App/NotificationData';



interface NotificationsProps { }

const Notifications: FC<NotificationsProps> = () => (
  <div className={styles.Notifications}>
    <PageHeader titles="Notification" active="Notification" items={['Apps']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
            <Card.Title>Alerts Notifications</Card.Title>
          </Card.Header>
          <Card.Body>
            <ButtonGroup>
              <Success/>
              <Secondary/>
              <LeftNotifier/>
              <CenterInfo/>
              <CenterDanger/>
              <Centerwarning/>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Side Alerts Notifications</Card.Title>
          </Card.Header>
          <Card.Body>
            <ButtonGroup>
              <SuccessLeft/>
              <WarningLeft/>
              <DangerLeft/>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Gradient Side Alerts Notifications</Card.Title>
          </Card.Header>
          <Card.Body>
            <ButtonGroup>
              <GradientSuccess/>
              <GradientWarning/>
               <GradientDanger/> 
              {/* <Link to="#" className="btn btn-success bg-success-gradient notice1">Success</Link>
              <Link to="#" className="btn btn-warning bg-warning-gradient warning1">Warning</Link>
              <Link to="#" className="btn btn-danger bg-danger-gradient error1">Danger</Link> */}
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
      {/* <!-- COL-END --> */}
    </div>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
);

export default Notifications;
