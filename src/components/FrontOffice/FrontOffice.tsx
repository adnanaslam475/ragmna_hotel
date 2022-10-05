import React, { useState,useEffect } from "react";
import "./FrontOffice.scss";
import { Tab, Row, Col, Nav, Card } from "react-bootstrap";
import ReservationList from "./ReservationList/ReservationList";
import GuestHistory from "./GuestHistory/GuestHistory";
import DefaultCalender from "../apps/DefaultCalender/DefaultCalender";
import { tabArraies } from "./FrontOfficeTypes";
import ReserveUser from "./ReserveUser/ReserveUser";

const FrontOffice = () => {
  // let tabArray: tabArraies[] =
  const [tab, SetTab] = useState<tabArraies[]>([]);
  const [key, setKey] = useState("first");

  const addTab = (row) => {
      let tabs = tab;
      let isAvailable = tabs.findIndex((x) => x.eventkey === row.id.toString())
      if (isAvailable > -1) {
          setKey(row.id.toString());
      } else {
          setKey(row.id.toString());
          tabs.push({
            eventkey: row.id.toString(),
            tabLable: row.GUEST_NAME,
          });
          SetTab(Object.assign([], tabs));
      }
  };

    const deleteTab = (e,index) => {
        e.stopPropagation()
        setKey('first');
        
    let tabs = tab;
    tabs.splice(index, 1);
    SetTab(Object.assign([], tabs));
  };

  

  return (
    <div>
      <Row>
        <Col xl={12}>
          <Card className="card-bg">
            <Card.Body>
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
                        <Nav.Link eventKey="first">
                          <i className="fe fe-user me-1"></i>Reservations
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <i className="fe fe-calendar me-1"></i>Calendar
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <i className="fe fe-settings me-1"></i>Guest History
                        </Nav.Link>
                      </Nav.Item>
                        {tab.map((value, index) => {
                          return (
                      <Nav.Item key={index}>
                            <Nav.Link  eventKey={value.eventkey}>
                              <i className="fe fe-user me-1"></i>
                              {value.tabLable}
                              <span
                                className="d-flex align-center"
                                onClick={(e) => deleteTab(e,index)}
                              >
                                <i className="icon fe fe-x"></i>
                              </span>
                            </Nav.Link>
                      </Nav.Item>
                          );
                        })}
                    </Nav>
                  </div>
                  <div className="tab-data">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <ReservationList addTab={addTab} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <DefaultCalender />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <GuestHistory />
                      </Tab.Pane>
                      {tab.map((value, index) => {
                        return (
                          <Tab.Pane key={index} eventKey={value.eventkey}>
                            <ReserveUser />
                          </Tab.Pane>
                        );
                      })}
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

export default FrontOffice;
