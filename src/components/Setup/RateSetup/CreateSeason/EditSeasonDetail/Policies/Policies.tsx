import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { AppDispatch } from "../../../../../../Redux/Store";
import { CommanDropDownType } from "../../../../PropertySetup/AddProperty/types";
import { fetchPolicies, usePolicies } from "../../../RateSetupSlice";
import "./Policies.scss";

const Policies = () => {
  const RoomTypes: CommanDropDownType[] = [
    { value: "Master Bedroom", label: "Master Bedroom" },
    { value: "Standard Room", label: "Standard Room" },
    { value: "Southern Hospitality", label: "Southern Hospitality" },
  ];
  const dispatch = useDispatch<AppDispatch>();
  const [assignPolicies, setAssignPolicies] = useState<boolean>(false);
  const [cancellation, setCancellation] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [noShow, setNoShow] = useState<boolean>(false);
  const { policies } = usePolicies();
  const assignPolicy = (e) => {
    setAssignPolicies(e.target.checked);
  };
  const getPolicies = () => {
    let response = dispatch(fetchPolicies()).unwrap;
  };
  useEffect(() => {
    getPolicies();
  }, []);
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
          {policies &&
            policies.map((item, ind) => {
              if (item.type === "Cancellation") {
                return (
                  <div className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`cancellation${ind}`}
                        defaultValue="option5"
                        defaultChecked
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              }
            })}

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
          {policies &&
            policies.map((item, ind) => {
              if (item.type === "Deposit") {
                return (
                  <div className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`Deposit${ind}`}
                        defaultValue="option5"
                        defaultChecked
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              }
            })}

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
          {policies &&
            policies.map((item, ind) => {
              if (item.type === "Check-in") {
                return (
                  <div className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`Check-in${ind}`}
                        defaultValue="option5"
                        defaultChecked
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              }
            })}

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
          {policies &&
            policies.map((item, ind) => {
              if (item.type === "No-Show") {
                return (
                  <div className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`No-Show${ind}`}
                        defaultValue="option5"
                        defaultChecked
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Policies;
