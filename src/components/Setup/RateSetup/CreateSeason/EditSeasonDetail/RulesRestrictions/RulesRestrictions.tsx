import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./RulesRestrictions.scss";
import Select from "react-select";
import { CommanDropDownType } from "../../../../PropertySetup/AddProperty/types";

const RulesRestrictions = () => {
  const RoomTypes: CommanDropDownType[] = [
    { value: "Master Bedroom", label: "Master Bedroom" },
    { value: "Standard Room", label: "Standard Room" },
    { value: "Southern Hospitality", label: "Southern Hospitality" },
  ];
  const [addAssignRules, setAddAssignRules] = useState<boolean>(false);
  const [minNights, setMinNight] = useState<boolean>(false);
  const [noCheckIn, setNoCheckIn] = useState<boolean>(false);
  const [noCheckOut, setNoCheckOut] = useState<boolean>(false);

  const assignRules = (e) => {
    setAddAssignRules(e.target.checked);
  };
  return (
    <React.Fragment>
      <div className="rules">
        <div className="rules-head">
          <h3>Rules/Restrictions</h3>
          <Form.Check
            className="ps-6 check-switch-style d-flex align-items-center"
            type="switch"
            id="additionalCharge"
            label="Assign rules by room class"
            onChange={(e) => {
              assignRules(e);
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
        <div className="rules-body">
          {addAssignRules ? (
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
          <div className="d-flex rules-body-check">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
                onClick={() => setMinNight(!minNights)}
              />
              <span className="custom-control-label">
                Min nights <i className="fe fe-minus-circle" />
                <input
                  disabled={!minNights}
                  className="check-input"
                  type="number"
                />
                <i className="fe fe-plus-circle" />
              </span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
                onClick={() => setNoCheckIn(!noCheckIn)}
              />
              <span className="custom-control-label">No check-in</span>
            </label>
          </div>
          {noCheckIn ? (
            <div className="day-checkbox">
              <Form.Check label="M" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="W" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="F" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
            </div>
          ) : null}
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
                onClick={() => setNoCheckOut(!noCheckOut)}
              />
              <span className="custom-control-label">No check-out</span>
            </label>
          </div>
          {noCheckOut ? (
            <div className="day-checkbox">
              <Form.Check label="M" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="W" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="F" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RulesRestrictions;
