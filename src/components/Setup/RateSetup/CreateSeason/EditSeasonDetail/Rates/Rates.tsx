import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Rates.scss";
const Rates = () => {
  const [standardRoom, setStandardRoom] = useState(false);
  const [masterBedroom, setMasterBedroom] = useState(false);
  const [southernHospitality, setSouthernHospitality] = useState(false);

  return (
    <React.Fragment>
      <div className="rate">
        <div className="rate-head">
          <h3>Rates</h3>
        </div>
        <div className="rate-body">
          <Row>
            <Col lg={3} md={6} sm={12}>
              {/* <div> */}
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setStandardRoom(!standardRoom)}
                />
                <span className="custom-control-label">Standard Room</span>
              </label>
              {/* </div> */}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {standardRoom ? (
                <div className="standard-rate-night">
                  <div className="control-group form-group">
                    <input
                      type="number"
                      className="form-control required"
                      name="ratePerNight"
                      placeholder="$"
                    />
                  </div>
                </div>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setMasterBedroom(!masterBedroom)}
                />
                <span className="custom-control-label">Master Bedroom</span>
              </label>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {masterBedroom ? (
                <div className="standard-rate-night">
                  <div className="control-group form-group">
                    <input
                      type="number"
                      className="form-control required"
                      name="ratePerNight"
                      placeholder="$"
                    />
                  </div>
                </div>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setSouthernHospitality(!southernHospitality)}
                />
                <span className="custom-control-label">
                  Southern Hospitality
                </span>
              </label>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {southernHospitality ? (
                <div className="standard-rate-night">
                  <div className="control-group form-group">
                    <input
                      type="number"
                      className="form-control required"
                      name="ratePerNight"
                      placeholder="$"
                    />
                  </div>
                </div>
              ) : null}
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rates;
