import Select from "react-select";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";
import { getRoomType, useRateData, useRoomTypes } from "../../RateSetupSlice";
import "./EditRateInfo.scss";

const EditRateInfo = ({
  ratePlanDetails,
  nightlyName,
  setRatePlanDetails,
  handelChange,
  handleParentRatePlanChange,
  handelCheckBoxChange,
  handelRoomChange,
  isDerived,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
    const response = await dispatch(getRoomType()).unwrap();
  };
  useEffect(() => {
    getRoomTypes();
  }, []);

  const rateThan: CommanDropDownType[] = [
    { value: "greater than", label: "greater than" },
    { value: "lesser than", label: "lesser than" },
  ];

  const inputType: CommanDropDownType[] = [
    { value: "Percentage", label: "percent" },
    { value: "Fixed", label: "USD" },
  ];
  return (
    <React.Fragment>
      <Row className="Edit-RateInfo">
        <h2 className="mt-2 mb-3 font-weight-bold">Overview</h2>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Rate plan type</label>
            <input
              readOnly
              type="text"
              className="form-control required"
              value="Nightly rate plan"
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Rate Plan Name</label>
            <input
              type="text"
              className="form-control required"
              name="displayName"
              value={ratePlanDetails?.name}
              onChange={(e) => {
                handelChange("name", e.target.value);
              }}
            />
          </div>
        </Col>
        {/* <Col lg={4}>
          <div className="control-group form-group">
            <label className="form-label">Property name</label>
            <input
              readOnly
              type="text"
              className="form-control required"
              value={ratePlanDetails.name}
            />
          </div>
        </Col> */}
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Rate Plan Description</label>
            <textarea
              className="form-control required"
              name="description"
              value={ratePlanDetails?.description}
              onChange={(e) => {
                handelChange("description", e.target.value);
              }}
            />
          </div>
        </Col>
        <Col lg={3}>
          <div className="control-group form-group">
            <label className="form-label">Rate plan status</label>
            <Form.Check
              className="ps-6 check-switch-style d-flex align-items-center"
              type="switch"
              id="isActive"
              name="isActive"
              onChange={(e) => {
                handelChange("isActive", e.target.checked);
              }}
              checked={ratePlanDetails?.isActive}
            />
          </div>
        </Col>

        {/* <Col lg={4}></Col> */}
        <Col lg={3}>
          <label className="form-label">Default Rate Plan</label>
          <Form.Check
            className="ps-6 check-switch-style d-flex align-items-center"
            type="switch"
            id="default"
            name="default"
            onChange={(e) => {
              handelChange("default", e.target.checked);
            }}
            checked={ratePlanDetails?.default}
          />
        </Col>
      </Row>
      {isDerived ? (
        <Row className="Edit-RateInfo">
          <h2 className="mt-2 mb-3 font-weight-bold">
            Parent rate plan offset
          </h2> 
          <div className="inner-details">
            <Row className="details align-items-center">
              <Col lg={2}>Rates for the derived rate plan</Col>
              <Col lg={2} className="type-input">
                <input
                  type="number"
                  name="amount"
                  className="form-control required"
                  value={ratePlanDetails?.offer?.amount}
                  onChange={(e) => {
                    setRatePlanDetails({
                      ...ratePlanDetails,
                      offer: {
                        ...ratePlanDetails.offer,
                        amount: e.target.value,
                      },
                    });
                  }}
                />
                {/* {props.derivedRate.calculationType == "Percentage" ? (
            <i className="icon fe fe-percent" />
          ) : null} */}
              </Col>
              <Col lg={3}>
                <Select
                  classNamePrefix="Select"
                  options={inputType}
                  placeholder="Select"
                  name="calculationType"
                  value={inputType.find(
                    (option) =>
                      option.value === ratePlanDetails?.offer?.calculationType
                  )}
                  onChange={(e: any) => {
                    handleParentRatePlanChange("calculationType", e);
                    // props.valueChange("calculationType", selectedOption?.value);
                  }}
                />
              </Col>

              <Col lg={3}>
                <Select
                  classNamePrefix="Select"
                  options={rateThan}
                  name="type"
                  value={rateThan.find(
                    (option) => option.value === ratePlanDetails?.offer?.type
                  )}
                  onChange={(e: any) => {
                    handleParentRatePlanChange("type", e);
                    // props.valueChange("type", selectedOption?.value);
                  }}
                />
              </Col>
              <Col lg={2}>
                <h6 className="mt-2 mb-3 font-weight-bold">{nightlyName}</h6>
              </Col>

              {/* <Col lg={1}>{val.displayName}</Col> */}
            </Row>
            <div>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-promo"
                />
                <span className="custom-control-label">
                  Take rules from parent rate plan
                </span>
              </label>
              <p style={{ paddingLeft: "25px" }}>
                Rules can always be updated using the bulk update feature on the
                rates grid, which will supersede any base rules taken from the
                parent rate plan. Rules updated on the rates grid for the parent
                rate plan will not update the rules for this derived rate plan.
              </p>
            </div>
          </div>
        </Row>
      ) : null}

      <Row className="Edit-RateInfo">
        <h2 className="mt-2 mb-3 font-weight-bold">Channel</h2>
        <div className="channel-check-box">
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="Website"
                onChange={(e) => {
                  handelCheckBoxChange(e);
                }}
                checked={ratePlanDetails?.channels?.includes("Website")}
              />
              <span className="custom-control-label">Website</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="Booking.com"
                onChange={(e) => {
                  handelCheckBoxChange(e);
                }}
                checked={ratePlanDetails?.channels?.includes("Booking.com")}
              />
              <span className="custom-control-label">Booking.com</span>
            </label>
          </div>
        </div>
      </Row>
      <Row className="Edit-RateInfo">
        <h2 className="mt-2 mb-3 font-weight-bold">Room Types</h2>
        <div>
          {roomTypes &&
            roomTypes.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <label className="custom-control custom-checkbox-md">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name={item.name}
                      onChange={(e) => {
                        handelRoomChange(e, item._id, index);
                      }}
                      checked={
                        ratePlanDetails?.roomTypes?.findIndex(
                          (x) => x.roomTypeId == item._id
                        ) > -1
                      }
                    />
                    <span className="custom-control-label">{item.name}</span>
                  </label>
                </div>
              );
            })}
        </div>
      </Row>
    </React.Fragment>
  );
};

export default EditRateInfo;
