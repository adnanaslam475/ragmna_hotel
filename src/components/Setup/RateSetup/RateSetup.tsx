import React from "react";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RateList from "./RateList/RateList";
import "./RateSetup.scss";

const RateSetup = () => {
  return (
    <React.Fragment>
      <Card className="card-bg">
        <Card.Body>
          <div className="panel panel-secondary">
            <Tab.Container id="left-tabs-example p-0" defaultActiveKey="first">
              <div className="tab-name-container">
                <Nav
                  variant="pills"
                  className="panel-tabs nav-tabs panel-secondary"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Rate Setup</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Polices</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="tab-content-container">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <RateList />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second"></Tab.Pane>
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
