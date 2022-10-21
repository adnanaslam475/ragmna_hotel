import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./EditRatePolicies.scss";

const EditRatePolicies = () => {
  const [length, setLength] = useState<boolean>(false);
  const [booking, setBooking] = useState<boolean>(false);
  const [promo, setPromo] = useState<boolean>(false);
  const [cancellation, setCancellation] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [noShow, setNoShow] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Row className="Edit-RatePolicies">
        <h2 className="mt-2 mb-3 font-weight-bold">Restrictions</h2>
        <div>
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
                <span className="custom-control-label">
                  Min <i className="fe fe-minus-circle" />
                  <input className="check-input" type="number" />
                  <i className="fe fe-plus-circle" />
                  Nights
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
                  Max <i className="fe fe-minus-circle" />
                  <input className="check-input" type="number" />
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
                  More than <i className="fe fe-minus-circle" />
                  <input className="check-input" type="number" />
                  <i className="fe fe-plus-circle" /> days in advance of
                  check-in date
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
                  Within <i className="fe fe-minus-circle" />
                  <input className="check-input" type="number" />
                  <i className="fe fe-plus-circle" /> days of check-in date
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
      </Row>
      <Row className="Edit-RatePolicies">
        <h2 className="mt-2 mb-3 font-weight-bold">Policy</h2>
        <div>
          <div className="d-flex">
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
                  Cancellation Policy - Any cancellations made outside 48 hours
                  of arrival are fully refundable. Cancellations made within 48
                  hours of arrival will be non-refundable
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
                <span className="custom-control-label">Check in Policy -</span>
                <p>
                  Check in Policy - The balance of your stay is due on arrival.
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
      </Row>
    </React.Fragment>
  );
};

export default EditRatePolicies;
