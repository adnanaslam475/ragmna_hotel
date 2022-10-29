import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import RateList from "./RateList/RateList";
import RatePolicies from "./Ratepolicies/ratePolicies";
import "./RateSetup.scss";

const RateSetup = () => {
  return (
    <React.Fragment>
      <Card className="card-bg">
        <Card.Body>
          <div className="panel panel-secondary">
            <Tab.Container id="left-tabs-example p-0" defaultActiveKey="first">
              <div className="rate-name-container">
                <Nav
                  variant="pills"
                  className="panel-tabs nav-tabs panel-secondary"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Rate Setup</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Policies</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="rate-content-container">
                <Tab.Content className="content-container">
                  <Tab.Pane eventKey="first" className="rate-list">
                    <RateList />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="rate-policies">
                    <RatePolicies />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default RateSetup;
