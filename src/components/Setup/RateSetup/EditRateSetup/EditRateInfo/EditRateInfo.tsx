import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";
import { getRoomType, useRateData, useRoomTypes } from "../../RateSetupSlice";
import "./EditRateInfo.scss";

const EditRateInfo = () => {
  const { rateData } = useRateData();
  const dispatch = useDispatch<AppDispatch>();
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
    const response = await dispatch(
      getRoomType("634f7d62e2be24a2b6f3503e")
    ).unwrap();
  };
  useEffect(() => {
    getRoomTypes();
  }, []);

  const RatePlan: CommanDropDownType[] = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const [ratePlanDetails, setRatePlanDetails] = useState(rateData);

  const handelChange = (key, val) => {
    setRatePlanDetails({ ...ratePlanDetails, [key]: val });
  };

  const handelCheckBoxChange = (e) => {
    if (e.target.checked) {
      let i = ratePlanDetails.channels.findIndex((x) => x === e.target.name);
      let array = ratePlanDetails.channels.slice();
      array.push(e.target.name);
      const newObj = { ...ratePlanDetails, channels: array };
      setRatePlanDetails(newObj);
    } else {
      let i = ratePlanDetails.channels.findIndex((x) => x === e.target.name);
      let array = ratePlanDetails.channels.slice();
      array.splice(i, 1);
      const newObj = { ...ratePlanDetails, channels: array };
      setRatePlanDetails(newObj);
    }
  };

  const handelRoomChange = (e,id,index) => {
    if (e.target.checked) {
      let array = ratePlanDetails.roomTypes.slice();
      array.push({
        roomTypeId: roomTypes[index]._id,
        price: 0,
        channelPrices: [],
      })
      const newObj = { ...ratePlanDetails, roomTypes: array };
      setRatePlanDetails(newObj);
    } else {
      let array = ratePlanDetails.roomTypes.slice();
      let i = array.findIndex((x)=> x.roomTypeId === id); 
      array.splice(i,1);
      const newObj = { ...ratePlanDetails, roomTypes: array };
      setRatePlanDetails(newObj);
    }
  };
  console.log(ratePlanDetails, "ratePlanDetails");

  return (
    <React.Fragment>
      <Row className="Edit-RateInfo">
        <h2 className="mt-2 mb-3 font-weight-bold">Overview</h2>
        <Col lg={4}>
          <div className="control-group form-group">
            <label className="form-label">Rate plan type</label>
            <input
              readOnly
              type="text"
              className="form-control required"
              value="Nightly rate plan"
              defaultValue="Rate plan"
            />
          </div>
        </Col>
        <Col lg={4}>
          <div className="control-group form-group">
            <label className="form-label">Property name</label>
            <input
              readOnly
              type="text"
              className="form-control required"
              value={ratePlanDetails.name}
              defaultValue="Property name"
            />
          </div>
        </Col>
        <Col lg={4}>
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
              checked={ratePlanDetails.isActive}
            />
          </div>
        </Col>
        <Col lg={4}>
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
        <Col lg={4}></Col>
        <Col lg={4}>
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
        <Col lg={8}>
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
              <span className="custom-control-label">Booking.com-DC</span>
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
                        handelRoomChange(e,item._id,index);
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
