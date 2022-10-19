import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CommanDropDownType } from "../types";
import Select from "react-select";
import "./Sections.scss";
import * as Yup from "yup";
import { useFormik } from "formik";

export interface SectionsProps {}

const Sections = (props: SectionsProps) => {


  const initialSelectValues = {
    name: "",
    quantity: 0,
    allowedFor: "",
    isNonSmoking: false,
    isActive: false,
    virtualTourLink: "",
  };

  const [initialValues, setInitialValues] = useState(initialSelectValues);

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    quantity: Yup.number().required(),
    allowedFor: Yup.string().required(),
    virtualTourLink: Yup.string().required(),
    isNonSmoking: Yup.boolean(),
    isActive: Yup.boolean(),
  });
  
  const onSubmit = (values) => {
    console.log(values,"values");
    
   };
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const allowFors: CommanDropDownType[] = [
    { value: "", label: "Select Allowed For" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Row className="section">
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={
                  touched.name && errors.name
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Name"
                name="name"
                value={values.name}
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
                  (option) => option.value === values.allowedFor
                )}
                placeholder="Select Allow For"
                name="allowedFor"
                onChange={(selectedOption: any) => {
                  handleChange("allowedFor")(selectedOption?.value);
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
                  touched.virtualTourLink && errors.virtualTourLink
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Virtual Tour Link"
                name="virtualTourLink"
                value={values.virtualTourLink}
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
          <Col
            lg={6}
            md={12}
            className="align-items-center d-flex justify-content-end mt-6"
          >
            <div className="control-group form-group">
              <Button type="submit"> Add </Button>
            </div>
          </Col>
        </Row>
      </form>
      {/* <Row className="Amenities-form p-4 mb-4">
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Allow For</th>
              <th>isNonSmoking</th>
              <th>isActive</th>
            </tr>
          </thead>
          <tbody>
            {initialValues.map((val: any , index) => (
              <Fragment key={index}>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.quantity}</td>
                  <td>{val.allowedFor}</td>
                  <td>{val.isNonSmoking}</td>
                  <td>{val.isActive}</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </Row> */}
    </React.Fragment>
  );
};

export default Sections;
