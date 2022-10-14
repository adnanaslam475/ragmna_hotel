import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const RateChannelDistribut = (props) => {
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
              value="weight"
              id="nightyRate"
              defaultChecked
            />
            <label htmlFor="nightyRate">hiiiiiii Rate</label>
            <input
              type="radio"
              name="rate"
              value="dimensions"
              id="derivedRate"
            />
            <label htmlFor="derivedRate">Derived Rate</label>
          </div>
          <div className="pt-6">
            <Button onClick={props.previousStep}>Previous</Button>
            <Button onClick={props.nextStep}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RateChannelDistribut;
