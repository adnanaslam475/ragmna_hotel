import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { AppDispatch } from "../../../../../../Redux/Store";
import { CommanDropDownType } from "../../../../PropertySetup/AddProperty/types";
import { fetchPolicies, usePolicies } from "../../../RateSetupSlice";
import "./Policies.scss";

const Policies = (props: any) => {
  const { seasonBody, SetSeasonBody } = props;
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
  const getPolicies = async () => {
    await dispatch(fetchPolicies()).unwrap;
  };
  useEffect(() => {
    getPolicies();
  }, []);

  const onHandleRadioChange = (e, id) => {
    let temp = Object.assign({}, seasonBody);
    temp[e.target.name] = id;
    SetSeasonBody(temp);
  };

  const onHandleCheckCHange = (e, name) => {
    if (!e.target.checked) {
      let temp = Object.assign({}, seasonBody);
      temp[name] = "";
      SetSeasonBody(temp);
    }
  };
  useEffect(() => {
    if (seasonBody["cancellationPolicy"]) {
      setCancellation(true);
    }
  }, [seasonBody]);
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
                name="cancellationPolicy-check"
                checked={cancellation ? true : false}
                onChange={(e) => {
                  if (e.target.checked) setCancellation(true);
                  else setCancellation(false);
                  onHandleCheckCHange(e, "cancellationPolicy");
                }}
              />
              <span className="custom-control-label">Cancellation</span>
            </label>
          </div>
          {(cancellation || seasonBody["cancellationPolicy"]) &&
            policies &&
            policies
              .filter((item) => item.type === "Cancellation")
              .map((item, ind) => {
                return (
                  <div key={ind} className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`cancellationPolicy`}
                        checked={
                          item._id === seasonBody["cancellationPolicy"]
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          onHandleRadioChange(e, item._id);
                        }}
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              })}

          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="depositPolicy-check"
                checked={seasonBody["depositPolicy"] || deposit ? true : false}
                onChange={(e) => {
                  setDeposit(!deposit);
                  onHandleCheckCHange(e, "depositPolicy");
                }}
              />
              <span className="custom-control-label">Deposit</span>
            </label>
          </div>
          {(deposit || seasonBody["depositPolicy"]) &&
            policies &&
            policies
              .filter((item) => item.type === "Deposit")
              .map((item, ind) => {
                return (
                  <div key={ind} className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`depositPolicy`}
                        checked={
                          item._id === seasonBody["depositPolicy"] ? true : false
                        }
                        onChange={(e) => {
                          onHandleRadioChange(e, item._id);
                        }}
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              })}

          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                checked={seasonBody["checkInPolicy"] || checkIn ? true : false}
                name="checkInPolicy-check"
                onChange={(e) => {
                  setCheckIn(!checkIn);

                  onHandleCheckCHange(e, "checkInPolicy");
                }}
              />
              <span className="custom-control-label">Check-in</span>
            </label>
          </div>
          {(checkIn || seasonBody["checkInPolicy"]) &&
            policies &&
            policies
              .filter((item) => item.type === "Check-in")
              .map((item, ind) => {
                return (
                  <div key={ind} className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        checked={
                          item._id === seasonBody["checkInPolicy"] ? true : false
                        }
                        name={`checkInPolicy`}
                        onChange={(e) => {
                          onHandleRadioChange(e, item._id);
                        }}
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              })}

          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                checked={seasonBody["noShowPolicy"] || noShow ? true : false}
                name="noShowPolicy-check"
                onChange={(e) => {
                  setNoShow(!noShow);

                  onHandleCheckCHange(e, "noShowPolicy");
                }}
              />
              <span className="custom-control-label">No Show</span>
            </label>
          </div>
          {(noShow || seasonBody["noShowPolicy"]) &&
            policies &&
            policies
              .filter((item) => item.type === "No-Show")
              .map((item, ind) => {
                return (
                  <div key={ind} className="inner-class">
                    <label className="custom-control custom-radio-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name={`checkInPolicy`}
                        checked={
                          item._id === seasonBody["checkInPolicy"] ? true : false
                        }
                        onChange={(e) => {
                          onHandleRadioChange(e, item._id);
                        }}
                      />
                      <span className="custom-control-label">{item.name}</span>
                      <p>{item.description}</p>
                    </label>
                  </div>
                );
              })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Policies;
