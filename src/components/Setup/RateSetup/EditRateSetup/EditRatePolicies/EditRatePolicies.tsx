import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { fetchPolicies, usePolicies, useRateData } from "../../RateSetupSlice";
import "./EditRatePolicies.scss";

const EditRatePolicies = ({
  handelChangeRestrictions,
  handelCheckChange,
  editPolicies,
  onRadioChange,
  clearPolicy,
  isDerived
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [length, setLength] = useState<boolean>(false);
  const [booking, setBooking] = useState<boolean>(false);
  const [promo, setPromo] = useState<boolean>(false);
  const [cancellation, setCancellation] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [noShow, setNoShow] = useState<boolean>(false);
  const [minNights, setMinNights] = useState<boolean>(false);
  const [maxNights, setMaxNights] = useState<boolean>(false);


  const { rateData } = useRateData();
  // let [editPolicies, setEditPolicies] = useState<any>(rateData);

  const { policies } = usePolicies();
  console.log(policies, "policies");

  const getPolicies = () => {
    let response = dispatch(fetchPolicies()).unwrap;
  };
  useEffect(() => {
    getPolicies();
  }, []);


  useEffect(() => {
    if (editPolicies?.restrictions?.minimumNights) {
      setMinNights(true)
    }
    if (editPolicies?.restrictions?.maximumNights) {
      setMaxNights(true)
    }
  }, [editPolicies])

  useEffect(() => {
    if (editPolicies?.cancellationPolicy) {
      setCancellation(true)
    }
  }, [editPolicies])

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
                name="Length"
                defaultValue="Length of stay"
                checked={
                  minNights || maxNights
                    ? true
                    : false
                }
                onChange={(e) => {
                    setMinNights(false)
                    setMaxNights(false)
                  handelCheckChange(e, "minimumNights");
                  handelCheckChange(e, "maximumNights");
                }}
              />
              <span className="custom-control-label">Length of stay</span>
            </label>
          </div>
          {minNights || maxNights ? (
            <div className="inner-class">
              <h6>Guests Must Stay</h6>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="minimumNights"
                  checked={minNights ? true : false}
                  onChange={(e) => {
                    if (e.target.checked) setMinNights(true)
                    else setMinNights(false)
                    handelCheckChange(e, "minimumNights");
                  }}
                />
                <span className="custom-control-label">
                  Min <i className="fe fe-minus-circle" />
                  <input
                    disabled={!editPolicies?.restrictions?.minimumNights}
                    className="check-input"
                    type="number"
                    name="minimumNights"
                    value={editPolicies?.restrictions?.minimumNights}
                    onChange={(e) => {
                      handelChangeRestrictions("minimumNights", e.target.value);
                    }}
                  />
                  <i className="fe fe-plus-circle" />
                  Nights
                </span>
              </label>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="maximumNights"
                  checked={maxNights ? true : false}
                  onChange={(e) => {
                    if (e.target.checked) setMaxNights(true)
                    else setMaxNights(false)
                    handelCheckChange(e, "maximumNights");
                  }}
                />
                <span className="custom-control-label">
                  Max <i className="fe fe-minus-circle" />
                  <input
                    disabled={!editPolicies?.restrictions?.maximumNights}
                    className="check-input"
                    type="number"
                    name="maximumNights"
                    value={editPolicies?.restrictions?.maximumNights}
                    onChange={(e) => {
                      handelChangeRestrictions("maximumNights", e.target.value);
                    }}
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
                name="promo"
                defaultValue="option5"
                checked={editPolicies?.restrictions?.promoCode ? true : false}
                onChange={(e) => {
                  handelCheckChange(e, "promoCode");
                }}
              />
              <span className="custom-control-label">Promo code</span>
            </label>
          </div>
          {editPolicies?.restrictions?.promoCode ? (
            <div className="control-group form-group w-30 inner-class">
              <input
                type="text"
                className="form-control required"
                name="promoCode"
                value={editPolicies?.restrictions?.promoCode}
                onChange={(e) => {
                  handelChangeRestrictions("promoCode", e.target.value);
                }}
              />
            </div>
          ) : null}
        </div>
      </Row>
      <Row className="Edit-RatePolicies">
        <h2 className="mt-2 mb-3 font-weight-bold">Policy</h2>
        <div className="d-flex">
          <label className="custom-control custom-checkbox-md">
            <input
              type="checkbox"
              className="custom-control-input"
              name="example-checkbox5"
              defaultValue="option5"
              checked={
                cancellation ? true : false
              }
              onChange={(e) => {
                if (e.target.checked) setCancellation(true)
                else setCancellation(false)
                clearPolicy(e, "cancellation");
                setCancellation(!cancellation);
              }}
            />
            <span className="custom-control-label">Cancellation</span>
          </label>
        </div>
        {editPolicies?.cancellationPolicy || cancellation
          ? policies &&
          policies.map((item, ind) => {
            if (item.type === "Cancellation") {
              return (
                <div key={ind} className="inner-class">
                  <label className="custom-control custom-radio-md">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="cancellation"
                      defaultValue="option5"
                      checked={item._id === editPolicies?.cancellationPolicy}
                      onChange={(e) => {
                        onRadioChange(e, ind, item, "cancellation");
                      }}
                    />
                    <span className="custom-control-label">{item.name}</span>
                    <p>{item.description}</p>
                  </label>
                </div>
              );
            }
          })
          : null}

        <div className="d-flex">
          <label className="custom-control custom-checkbox-md">
            <input
              type="checkbox"
              className="custom-control-input"
              name="example-checkbox5"
              checked={editPolicies?.depositPolicy || deposit ? true : false}
              onChange={(e) => {
                clearPolicy(e, "deposit");
                setDeposit(!deposit);
              }}
            />
            <span className="custom-control-label">Deposit</span>
          </label>
        </div>
        {editPolicies?.depositPolicy || deposit
          ? policies &&
          policies.map((item, ind) => {
            if (item.type === "Deposit") {
              return (
                <div key={ind} className="inner-class">
                  <label className="custom-control custom-radio-md">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="Deposit"
                      checked={item._id === editPolicies?.depositPolicy}
                      onChange={(e) => {
                        onRadioChange(e, ind, item, "deposit");
                      }}
                    />
                    <span className="custom-control-label">{item.name}</span>
                    <p>{item.description}</p>
                  </label>
                </div>
              );
            }
          })
          : null}

        <div className="d-flex">
          <label className="custom-control custom-checkbox-md">
            <input
              type="checkbox"
              className="custom-control-input"
              name="example-checkbox5"
              defaultValue="option5"
              checked={editPolicies?.checkInPolicy || checkIn ? true : false}
              onChange={(e) => {
                clearPolicy(e, "check-In");
                setCheckIn(!checkIn);
              }}
            />
            <span className="custom-control-label">Check-in</span>
          </label>
        </div>
        {editPolicies?.checkInPolicy || checkIn
          ? policies &&
          policies.map((item, ind) => {
            if (item.type === "Check-in") {
              return (
                <div key={ind} className="inner-class">
                  <label className="custom-control custom-radio-md">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="Check-in"
                      defaultValue="option5"
                      checked={item._id === editPolicies?.checkInPolicy}
                      onChange={(e) => {
                        onRadioChange(e, ind, item, "check-In");
                      }}
                    />
                    <span className="custom-control-label">{item.name}</span>
                    <p>{item.description}</p>
                  </label>
                </div>
              );
            }
          })
          : null}

        <div className="d-flex">
          <label className="custom-control custom-checkbox-md">
            <input
              type="checkbox"
              className="custom-control-input"
              name="example-checkbox5"
              defaultValue="option5"
              checked={editPolicies?.noShowPolicy || noShow ? true : false}
              onChange={(e) => {
                clearPolicy(e, "No-Show");
                setNoShow(!noShow);
              }}
            />
            <span className="custom-control-label">No Show</span>
          </label>
        </div>
        {editPolicies?.noShowPolicy || noShow
          ? policies &&
          policies.map((item, ind) => {
            if (item.type === "No-Show") {
              return (
                <div className="inner-class">
                  <label className="custom-control custom-radio-md">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="No-Show"
                      defaultValue="option5"
                      checked={item._id === editPolicies?.noShowPolicy}
                      onChange={(e) => {
                        onRadioChange(e, ind, item, "No-Show");
                      }}
                    />
                    <span className="custom-control-label">{item.name}</span>
                    <p>{item.description}</p>
                  </label>
                </div>
              );
            }
          })
          : null}
      </Row>
    </React.Fragment>
  );
};

export default EditRatePolicies;
