import { useFormik } from "formik";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import * as Yup from "yup";

const BaseRate = (props) => {
  const initialValues = {
    basePrice: "",
  };

  const validationSchema = Yup.object({
    basePrice: Yup.string().required(),
  });

  const onSubmit = (values) => {
    props.nextStep();
    console.log(values);
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
            <h1>What is your base price?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part p-4">
          <form onSubmit={handleSubmit} className="w-80">
            <div className="control-group form-group">
              <label className="form-label">Base Price</label>
              <input
                type="text"
                className={
                  touched.basePrice && errors.basePrice
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Base Price"
                name="basePrice"
                value={values.basePrice}
                onChange={(e) => {
                  handleChange(e);
                  props.changeInput("basePrice", e.target.value);
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

export default BaseRate;
