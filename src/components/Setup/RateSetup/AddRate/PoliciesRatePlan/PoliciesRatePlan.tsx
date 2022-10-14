import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./PoliciesRatePlan.scss";

const PoliciesRatePlan = (props) => {
  const [cancellation, setCancellation] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [noShow, setNoShow] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>
              What policies will be applied to this rate plan by default ?
            </h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="policies-part px-6 py-4">
          <div className="policies-container">
            <p className="my-4">
              Policies set here are the default for the Rate Plan. It can later
              be changed for an individual season.
            </p>

            <p>
              Policies do not map to external channels. Please create an
              identical policy on the external channel for this Rate Plan in
              order to match innCenter
            </p>
            <div className="d-flex mt-6">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  onClick={() => setCancellation(!cancellation)}
                />
                <span className="custom-control-label">Cancellation</span>
              </label>
            </div>
            {cancellation ? (
              <div className="inner-class">
                <label className="custom-control custom-radio-md">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="cancellation"
                    defaultValue="option5"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    Room Cancellation Policy -
                  </span>
                  <p>
                    Cancellation Policy - Any cancellations made outside 48
                    hours of arrival are fully refundable. Cancellations made
                    within 48 hours of arrival will be non-refundable
                  </p>
                </label>
                <label className="custom-control custom-radio-md">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="cancellation"
                    defaultValue="option5"
                  />
                  <span className="custom-control-label">
                    House Cancellation Policy
                  </span>
                  <p>
                    Guests will incur a fee of 100% of total charges if they
                    cancel 0 days after the reservation was made
                  </p>
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
                  onClick={() => setDeposit(!deposit)}
                />
                <span className="custom-control-label">Deposit</span>
              </label>
            </div>
            {deposit ? (
              <div className="inner-class">
                <label className="custom-control custom-radio-md">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="deposit"
                    defaultValue="option5"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    Room Deposit Policy -
                  </span>
                  <p>
                    Deposit Policy - A deposit equal to 50% of the Total Stay is
                    required to make a reservation.
                  </p>
                </label>
                <label className="custom-control custom-radio-md">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="deposit"
                    defaultValue="option6"
                  />
                  <span className="custom-control-label">
                    House Deposit Policy
                  </span>
                  <p>
                    When guest books reservation, they must pay 100% of total
                    charges
                  </p>
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
                  onClick={() => setCheckIn(!checkIn)}
                />
                <span className="custom-control-label">Check-in</span>
              </label>
            </div>
            {checkIn ? (
              <div className="inner-class">
                <label className="custom-control custom-radio-md">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="check-in"
                    defaultValue="option5"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    Check in Policy -
                  </span>
                  <p>
                    Check in Policy - The balance of your stay is due on
                    arrival.
                  </p>
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
                  onClick={() => setNoShow(!noShow)}
                />
                <span className="custom-control-label">No Show</span>
              </label>
            </div>
            {noShow ? (
              <div className="inner-class">
                <label className="custom-control custom-radio-md">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="no-show"
                    defaultValue="option5"
                    defaultChecked
                  />
                  <span className="custom-control-label">No-Show Policy -</span>
                  <p>No-Show Policy - No-shows will be non-refundable.</p>
                </label>
              </div>
            ) : null}
          </div>
          <div className="Previous-button">
            <Button onClick={props.previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button onClick={props.nextStep}>Submit</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PoliciesRatePlan;
