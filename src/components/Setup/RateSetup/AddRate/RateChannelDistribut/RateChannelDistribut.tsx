import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const RateChannelDistribut = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>On which channels will this rate plan be distributed?</h1>
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
                <span className="custom-control-label">innCenter</span>
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
                <span className="custom-control-label">Airbnb</span>
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
                <span className="custom-control-label">Booking.com-DC</span>
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
                  innRoad Booking Engine -
                  SouthernHospitality.client.innroad.com
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

export default RateChannelDistribut;
