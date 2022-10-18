import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";
import "./EditRateInfo.scss";

const EditRateInfo = () => {
  const RatePlan: CommanDropDownType[] = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

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
              value="Southern Hospitality"
            />
          </div>
        </Col>
        <Col lg={4}>
          <div className="control-group form-group">
            <label className="form-label">Rate plan status</label>
            <Select classNamePrefix="Select" options={RatePlan} />
          </div>
        </Col>
        <Col lg={4}>
          <div className="control-group form-group">
            <label className="form-label">Rate Plan Name</label>
            <input type="text" className="form-control required" value="Test" />
          </div>
        </Col>
        <Col lg={4}></Col>
        <Col lg={4}>
          <label className="form-label">Default Rate Plan</label>
          <Form.Check
            className="ps-6 check-switch-style d-flex align-items-center"
            type="switch"
            id="defaultRatePlan"
          />
        </Col>
        <Col lg={8}>
          <div className="control-group form-group">
            <label className="form-label">Rate Plan Name</label>
            <textarea
              className="form-control required"
              value="This is very special rate only Test and his family"
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
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Select All</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">innCenter</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Airbnb</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Booking.com-DC</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">
                innRoad Booking Engine - SouthernHospitality.client.innroad.com
              </span>
            </label>
          </div>
        </div>
      </Row>
      <Row className="Edit-RateInfo">
        <h2 className="mt-2 mb-3 font-weight-bold">Room Types</h2>
        <div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Select All</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Standers Room</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Master Badroom</span>
            </label>
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
              />
              <span className="custom-control-label">Southern Hospitality</span>
            </label>
          </div>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default EditRateInfo;
