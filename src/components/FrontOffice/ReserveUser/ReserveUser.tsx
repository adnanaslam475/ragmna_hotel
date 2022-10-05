import React, { useState, useRef, forwardRef, FC } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import "./ReserveUser.scss";
import UserDetail from "./UserDetail/UserDetail";
import UserFolio from "./UserFolio/UserFolio";
import UserHistory from "./UserHistory/UserHistory";

const ReserveUser = () => {
  const [key, setKey] = useState("first");

  return (
    <div>
      <Row>
        <Col xl={12}>
          <Card className="card-bg">
            <Card.Body className="sub-tab">
              <div className="panel panel-secondary">
                <Tab.Container
                  id="left-tabs-example"
                  onSelect={(k: any) => setKey(k)}
                  activeKey={key}
                >
                  <div className="tab-name">
                    <Nav
                      variant="pills"
                      className="panel-tabs nav-tabs panel-secondary"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Details</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Folio(s)</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">History</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Documents</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="tab-data">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <UserDetail />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <UserFolio />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <UserHistory />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ReserveUser;
