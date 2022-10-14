import React from "react";
import { Col, Row } from "react-bootstrap";
import './RateType.scss'

const RateType = () => {
  return (
    <React.Fragment>
      <Row className="d-flex align-items-center">
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1> What type of rate you want?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="p-4">
          <div className="d-flex justify-content-center">
            <h2><b>Select Rate Type</b></h2>
          </div>
          <div className="toggle my-4">
            <input
              type="radio"
              name="rate"
              value="weight"
              id="nightyRate"
              defaultChecked
            />
            <label htmlFor="nightyRate">
            Nightly Rate
            </label>
            <input
              type="radio"
              name="rate"
              value="dimensions"
              id="derivedRate"
            />
            <label htmlFor="derivedRate">Derived Rate</label>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RateType;
