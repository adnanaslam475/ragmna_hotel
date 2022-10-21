import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { CommanDropDownType } from "../../../../PropertySetup/AddProperty/types";
import "./Policies.scss";

const Policies = () => {
  const RoomTypes: CommanDropDownType[] = [
    { value: "Master Bedroom", label: "Master Bedroom" },
    { value: "Standard Room", label: "Standard Room" },
    { value: "Southern Hospitality", label: "Southern Hospitality" },
  ];
  const [assignPolicies, setAssignPolicies] = useState<boolean>(false);
  const [cancellation, setCancellation] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [noShow, setNoShow] = useState<boolean>(false);
  const assignPolicy = (e) => {
    setAssignPolicies(e.target.checked);
  };
  return (
    <React.Fragment>
      <div className="policies">
        <div className="policies-head">
          <h3>Policies</h3>
          <Form.Check
            className="ps-6 check-switch-style d-flex align-items-center"
            type="switch"
            id="additionalCharge"
            label="Assign Policies by room types"
            onChange={(e) => {
              assignPolicy(e);
            }}
            // onChange={(e) => {
            //   setFieldValue(
            //     "additionalCharge",
            //     e.target.checked
            //   );
            // }}
            // checked={values.additionalCharge}
          />
        </div>
        <div className="policies-body">
          {assignPolicies ? (
            <div className="control-group form-group w-50">
              <label className="form-label">Room Type</label>
              <Select
                isMulti
                classNamePrefix="Select"
                options={RoomTypes}
                placeholder="State"
              />
            </div>
          ) : null}
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
      </div>
    </React.Fragment>
  );
};

export default Policies;
