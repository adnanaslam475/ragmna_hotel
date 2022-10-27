import { useFormik } from "formik";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import * as Yup from "yup";
import { RatePlanTypes } from "../../rateSetupTypes";

const RatePlan = (props) => {
  const initialValues: RatePlanTypes = {
    name: "",
    description: "",
    displayName:''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string(),
    displayName:Yup.string().required()
  });

  const onSubmit = (values) => {
    props.nextStep();
  };

  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1>What is your rate plan name?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part p-4">
          <form onSubmit={handleSubmit} className="w-80">
            <div className="control-group form-group">
              <label className="form-label">Rate Plan Name</label>
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
                  props.changeInput("name", e.target.value);
                }}
              />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Rate Display Name</label>
              <input
                type="text"
                className={
                  touched.displayName && errors.displayName
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Rate Display Name"
                name="displayName"
                value={values.displayName}
                onChange={(e) => {
                  handleChange(e);
                  props.changeInput("displayName", e.target.value);
                }}
              />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Enter rate plan description</label>
              <textarea
                className={
                  touched.description && errors.description
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={(e) => {
                  handleChange(e);
                  props.changeInput("description", e.target.value);
                }}
              />
            </div>
            <div className="Previous-button">
              <Button onClick={props.previousStep}>Previous</Button>
            </div>
            <div className="next-button">
              <Button type="submit">Next</Button>
            </div>
          </form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RatePlan;
