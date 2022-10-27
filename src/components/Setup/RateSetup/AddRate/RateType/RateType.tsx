import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./RateType.scss";

const RateType = (props) => {
  const [type, setType] = useState<string>("nightly");
  const onSubmit = () => {
    props.nextStep();
    props.setType(type);
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1> What type of rate you want?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part p-4">
          <div className="d-flex justify-content-center">
            <h2>
              <b>Select Rate Type</b>
            </h2>
          </div>
          <div className="toggle my-4">
            <input
              type="radio"
              name="rate"
              value="nightly"
              id="nightyRate"
              checked={type == "nightly" ? true : false}
              onChange={(e: any) => {
                setType(e.target.checked && "nightly");
              }}
            />
            <label htmlFor="nightyRate">Nightly Rate</label>
            <input
              type="radio"
              name="rate"
              value="derived"
              id="derivedRate"
              checked={type == "nightly" ? false : true}
              onChange={(e: any) => {
                setType(e.target.checked && "derived");
              }}
            />
            <label htmlFor="derivedRate">Derived Rate</label>
          </div>
          <div className="pt-6 next-button">
            <Button onClick={() => onSubmit()}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RateType;
