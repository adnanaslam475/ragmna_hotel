import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./QualifyRatePlan.scss";

const QualifyRatePlan = (props: any) => {
  const { onQulifyRateCheckChange, restrictionsChange, rate, previousStep, nextStep } = props;
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
                  name="lengthOfStay"
                  checked={length}
                  onChange={(e) => {
                    if(!e.target.checked){
                      setMin(false)
                      setMax(false)
                    }
                    setLength(!length)
                    onQulifyRateCheckChange('lengthOfStay', e)
                  }}
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
                    name="minimumNights"
                    checked={min}
                    onChange={(e) => {
                      if(e.target.checked) setMin(true)
                      else setMin(false)
                      setMin(!min)
                      onQulifyRateCheckChange('minimumNights', e)
                    }}
                  />
                  <span className="custom-control-label">
                    Min <i className="fe fe-minus-circle" />
                    <input
                      className="check-input"
                      disabled={!min}
                      onChange={(e) => {
                        restrictionsChange("minimumNights", e);
                      }}
                      value={rate.minimumNights}
                      type="number"
                    />
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
                    onChange={(e) => {
                      setMax(!max)
                      onQulifyRateCheckChange('maximumNights', e)
                    }}
                  />
                  <span className="custom-control-label">
                    Max <i className="fe fe-minus-circle" />
                    <input
                      className="check-input"
                      disabled={!max}
                      value={rate.maximumNights}
                      onChange={(e) => {
                        restrictionsChange("maximumNights", e);
                      }}
                      type="number"
                    />
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
                  onChange={(e) => {
                    setPromo(!promo)
                    onQulifyRateCheckChange('promoCode', e)
                  }}
                />
                <span className="custom-control-label">Promo code</span>
              </label>
            </div>
            {promo ? (
              <div className="control-group form-group w-30 inner-class">
                <input
                  required
                  type="text"
                  value={rate.promoCode}
                  disabled={!promo}
                  onChange={(e) => {
                    restrictionsChange("promoCode", e);
                  }}
                  className="form-control required"
                  name="promocode"
                />
              </div>
            ) : null}
          </div>
          <div className="Previous-button">
            <Button onClick={previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button onClick={nextStep}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default QualifyRatePlan;
