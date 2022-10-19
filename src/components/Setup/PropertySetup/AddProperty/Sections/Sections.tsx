import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CommanDropDownType } from "../types";
import Select from "react-select";
import "./Sections.scss";

export interface SectionsProps {
  values: any;
  handleChange: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const Sections = (props: SectionsProps) => {
  const { values, handleChange, errors, touched, setFieldValue } = props;

  const allowFors: CommanDropDownType[] = [
    { value: "", label: "Select Allowed For" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  return (
    <React.Fragment>
      <Row className="section">
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={
                touched.Sname && errors.Sname
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Name"
              name="Sname"
              value={values.Sname}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className={
                touched.quantity && errors.quantity
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Quantity"
              name="quantity"
              value={values.quantity}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Allow For</label>
            <Select<CommanDropDownType>
              classNamePrefix="Select"
              options={allowFors}
              value={allowFors.filter(
                (option) => option.value === values.SallowedFor
              )}
              placeholder="Select Allow For"
              name="SallowedFor"
              onChange={(selectedOption: any) => {
                handleChange("SallowedFor")(selectedOption?.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Virtual Tour Link</label>
            <input
              type="text"
              className={
                touched.SvirtualTourLink && errors.SvirtualTourLink
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Virtual Tour Link"
              name="SvirtualTourLink"
              value={values.SvirtualTourLink}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </Col>
        <Col lg={6} className="mb-3">
          <Form.Group>
            <Form.Check
              className="ps-6 pro-switch-style d-flex align-items-center"
              type="switch"
              id="isNonSmoking"
              label="Is Non Smoking"
              onChange={(e) => {
                setFieldValue("isNonSmoking", e.target.checked);
              }}
              checked={values.isNonSmoking}
            />
          </Form.Group>
        </Col>
        <Col lg={6}></Col>
        <Col lg={6} className="mb-3">
          <Form.Group>
            <Form.Check
              className="ps-6 pro-switch-style d-flex align-items-center"
              type="switch"
              id="isActive"
              label="Is Active"
              onChange={(e) => {
                setFieldValue("isActive", e.target.checked);
              }}
              checked={values.isActive}
            />
          </Form.Group>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Sections;
