import { useFormik } from "formik";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import * as Yup from 'yup'

const TaxSetup = () => {
  const initialValues = {
    propertyId: {},
    roomTypeId: {},
    shortCode: "",
    name: "",
    startDate: "",
    endDate: "",
    surcharge: 0,
    type: 0,
    calculationType: 0,
    isVatApplicable: true,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    startDate: Yup.string().required("Please Select StartDate"),
    endDate: Yup.string().required("Please Select EndDate"),
    surcharge: Yup.number().required("Please Select Surcharge"),
    type: Yup.number(),
    calculationType: Yup.number(),
    isVatApplicable: Yup.boolean(),
    shortCode: Yup.string(),
  });
  const onSubmit = (values) => {
    let payload = Object.assign({}, values);
  };
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Row className="Contect-details p-4 mb-4">
          <h4>Tax Setup</h4>
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
                placeholder="Property Name"
                name="name"
                value={values.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
        </Row>
      </form>
    </React.Fragment>
  );
};
export default TaxSetup;
