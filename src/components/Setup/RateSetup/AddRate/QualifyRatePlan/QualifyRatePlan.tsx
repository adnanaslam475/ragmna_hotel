import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./QualifyRatePlan.scss";

const QualifyRatePlan = (props) => {
  const [length, setLength] = useState<boolean>(false);
  const [booking, setBooking] = useState<boolean>(false);
  const [promo, setPromo] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>Which room type are available in this rate plan by default?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part px-6 py-4">
          <div className="w-80">
            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setLength(!length)}
                />
                <span className="custom-control-label">Length of stay</span>
              </label>
            </div>
            {length ? (
              <div className="inner-class">
                <h6>Guests Must Stay</h6>
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">Min <i className="fe fe-minus-circle" /><input className='check-input' type='number' /> <i className="fe fe-plus-circle" />Nights</span>
                </label>
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">Max <i className="fe fe-minus-circle" /> <input className='check-input' type='number' /> <i className="fe fe-plus-circle" />Nights</span>
                </label>
              </div>
            ) : null}

            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setBooking(!booking)}
                />
                <span className="custom-control-label">Booking window</span>
              </label>
            </div>
            {booking ? (
              <div className="inner-class">
                <h6>Guests Must Book</h6>
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">
                    More than <i className="fe fe-minus-circle" /> <input className='check-input' type='number' /> <i className="fe fe-plus-circle" /> days in advance of check-in date
                  </span>
                </label>
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox5"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">
                    Within <i className="fe fe-minus-circle" /> <input className='check-input' type='number' /> <i className="fe fe-plus-circle" /> days of check-in date
                  </span>
                </label>
              </div>
            ) : null}

            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setPromo(!promo)}
                />
                <span className="custom-control-label">Promo code</span>
              </label>
            </div>
            {promo ? (
              <div className="control-group form-group w-30 inner-class">
                <input
                  type="number"
                  className="form-control required"
                  name="promocode"
                />
              </div>
            ) : null}
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

export default QualifyRatePlan;
