import React, { useEffect } from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../../../Redux/Store";
import CreateSeason from "../CreateSeason/CreateSeason";
import { getById, useRateData } from "../RateSetupSlice";
import EditRateInfo from "./EditRateInfo/EditRateInfo";
import EditRatePolicies from "./EditRatePolicies/EditRatePolicies";

const EditRateSetup = () => {
  const dispatch = useDispatch<AppDispatch>();
  let { id } = useParams();
  const { rateData } = useRateData();
  const getByRateId = () => {
    let response = dispatch(getById(id ? id : "")).unwrap;
  };
  useEffect(() => {
    if (id) {
      getByRateId();
    }
  }, [id]);
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
                    <Nav.Link eventKey="first">Rate plan overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      Restrictions & Policies
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Calendar</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="tab-content-container">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <EditRateInfo />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <EditRatePolicies />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <CreateSeason />
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

export default EditRateSetup;
