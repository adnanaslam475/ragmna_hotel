import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
// import "./DefaultRatePlan.scss";

const DefaultRatePlan = (props) => {
  return (
    <React.Fragment>
      <Row >
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>
              Which room type are available in this rate plan by default?
            </h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part px-6 py-4">
          <div>
              <div className="d-flex">
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">Select All</span>
                </label>
              </div>
              <div className="d-flex">
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">Standers Room</span>
                </label>
              </div>
              <div className="d-flex">
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">Master Badroom</span>
                </label>
              </div>
              <div className="d-flex">
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">
                    Southern Hospitality
                  </span>
                </label>
              </div>
            </div>
          <div className="Previous-button">
            <Button onClick={props.previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button onClick={props.nextStep}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DefaultRatePlan;
