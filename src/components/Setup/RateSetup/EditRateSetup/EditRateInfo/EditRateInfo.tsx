import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";
import { getRoomType, useRateData, useRoomTypes } from "../../RateSetupSlice";
import "./EditRateInfo.scss";

const EditRateInfo = ({
  ratePlanDetails,
  handelChange,
  handelCheckBoxChange,
  handelRoomChange,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
    const response = await dispatch(getRoomType()).unwrap();
  };
  useEffect(() => {
    getRoomTypes();
  }, []);

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
              value={ratePlanDetails.displayName}
              onChange={(e) => {
                handelChange("displayName", e.target.value);
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
              value={ratePlanDetails.description}
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
            checked={ratePlanDetails.default}
          />
        </Col>
      </Row>
      <Row className="Edit-RateInfo">
        <h2 className="mt-2 mb-3 font-weight-bold">Parent rate plan offset</h2>
      </Row>
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
