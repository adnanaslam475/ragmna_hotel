import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./QualifyRatePlan.scss";

const QualifyRatePlan = (props) => {
  const [length, setLength] = useState<boolean>(false);
  const [min, setMin] = useState<boolean>(false);
  const [max, setMax] = useState<boolean>(false);
  const [promo, setPromo] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>
              What restrictions do guests need to meet in order to qualify for
              this rate plan ?
            </h1>
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
                  checked={length}
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
                    name="example-min"
                    checked={min}
                    onChange={() => setMin(!min)}
                  />
                  <span className="custom-control-label">
                    Min <i className="fe fe-minus-circle" />
                    <input
                      className="check-input"
                      disabled={!min}
                      onChange={(e) => {
                        props.restrictionsChange("minimumNights", e);
                      }}
                      value={props.rate.minimumNights}
                      type="number"
                    />{" "}
                    <i className="fe fe-plus-circle" />
                    Nights
                  </span>
                </label>
                <label className="custom-control custom-checkbox-md">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-max"
                    checked={max}
                    onChange={() => setMax(!max)}
                  />
                  <span className="custom-control-label">
                    Max <i className="fe fe-minus-circle" />
                    <input
                      className="check-input"
                      disabled={!max}
                      value={props.rate.maximumNights}
                      onChange={(e) => {
                        props.restrictionsChange("maximumNights", e);
                      }}
                      type="number"
                    />{" "}
                    <i className="fe fe-plus-circle" />
                    Nights
                  </span>
                </label>
              </div>
            ) : null}

            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-promo"
                  checked={promo}
                  onClick={() => setPromo(!promo)}
                />
                <span className="custom-control-label">Promo code</span>
              </label>
            </div>
            {promo ? (
              <div className="control-group form-group w-30 inner-class">
                <input
                  required
                  type="text"
                  value={props.rate.promoCode}
                  disabled={!promo}
                  onChange={(e) => {
                    props.restrictionsChange("promoCode", e);
                  }}
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
