import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { AppDispatch } from "../../../../../Redux/Store";
import { getTaxConfigDetails } from "./taxSetupSlice";
import "./TaxSetup.scss";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Select from "react-select";
import { CommanDropDownType } from "../types";

export interface TaxSetupProps {
  initialTaxValuesInfo:any
  setTaxInfo:any
}

const TaxSetup = (props: TaxSetupProps) => {
  const {initialTaxValuesInfo , setTaxInfo} = props;

  const TypeList: any = [
    { value: "", label: "Select Types" },
    { value: "Tax", label: "Tax" },
    { value: "Fee", label: "Fee" },
  ];

  const CalculationTypes: any = [
    { value: "", label: "Select Types" },
    { value: "Percentage", label: "Percentage per charge" },
    { value: "charge", label: "Flat amount per charge" },
    {
      value: "night",
      label: "Flat amount Per person per night",
    },
    { value: "Tiered", label: "Tiered tax" },
  ];

  // let { id } = useParams();
  // const dispatch = useDispatch<AppDispatch>();

  // const getTaxSetupById = async () => {
  //   if (id) {
  //     let response: any = await dispatch(getTaxConfigDetails(id)).unwrap();
  //     console.log(response, "response");
  //   }
  // };

  // useEffect(() => {
  //   if (id) getTaxSetupById();
  // }, [id]);

  // const initialValues = {
  //   // propertyId: {},
  //   // roomTypeId: {},
  //   shortCode: "",
  //   name: "",
  //   startDate: "",
  //   endDate: "",
  //   surcharge: 0,
  //   type: 0,
  //   calculationType: 0,
  //   isVatApplicable: false,
  // };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Please Enter Name"),
  //   startDate: Yup.string().required("Please Select StartDate"),
  //   endDate: Yup.string().required("Please Select EndDate"),
  //   surcharge: Yup.number().required("Please Select Surcharge"),
  //   type: Yup.number(),
  //   calculationType: Yup.number(),
  //   isVatApplicable: Yup.boolean(),
  //   shortCode: Yup.string(),
  // });
  // const onSubmit = (values) => {
  //   let payload = Object.assign({}, values);
  // };
  // const { handleChange, handleSubmit, values, errors, touched, setFieldValue} = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit,
  // });
  return (
    <React.Fragment>
      {/* <form onSubmit={handleSubmit}> */}
      <Row className="Contect-details p-4 mb-4">
        <h4>Tax Setup</h4>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Name"
              name="name"
              value={initialTaxValuesInfo.name}
              onChange={(e) => {
                setTaxInfo('name',e.target.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Short Code</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Short Code"
              name="shortCode"
              value={initialTaxValuesInfo.shortCode}
              onChange={(e) => {
                setTaxInfo('shortCode',e.target.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6} className="date-picker">
          <label className="form-label">Start Date</label>
          <DayPickerInput
            placeholder="Start Date"
            format="DD/MM/YYYY"
            dayPickerProps={{ disabledDays: { before: new Date() } }}
            value={initialTaxValuesInfo.startDate}
            onDayChange={(e) => setTaxInfo('startDate',e)}
          />
        </Col>
        <Col lg={6} className="date-picker">
          <label className="form-label">End Date</label>
          <DayPickerInput
            dayPickerProps={{ disabledDays: { before: new Date() } }}
            format="DD/MM/YYYY"
            placeholder="End Date"
            value={initialTaxValuesInfo.endDate}
            onDayChange={(e) => setTaxInfo('endDate',e)}
          />
        </Col>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Type</label>
            <Select
              classNamePrefix="Select"
              options={TypeList}
              value={TypeList.filter((option) => option.value === initialTaxValuesInfo.type)}
              placeholder="Select Type"
              name="type"
              onChange={(selectedOption: any) => {
                setTaxInfo('type',selectedOption?.value)
              }}
            />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Calculation Type</label>
            <Select
              classNamePrefix="Select"
              options={CalculationTypes}
              value={CalculationTypes.filter(
                (option) => option.value === initialTaxValuesInfo.calculationType
              )}
              placeholder="Select Calculation Type"
              name="calculationType"
              onChange={(selectedOption: any) => {
                setTaxInfo('calculationType',selectedOption?.value)
              }}
            />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Surcharge</label>
            <input
              type="number"
              className="form-control required"
              placeholder="Surcharge"
              name="surcharge"
              value={initialTaxValuesInfo.surcharge}
              onChange={(e) => {
                setTaxInfo('surcharge',e.target.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6} md={12} className="d-flex align-items-center my-2">
          <Form.Group>
            <Form.Check
              className="ps-6 check-switch-style d-flex align-items-center"
              type="switch"
              id="isVatApplicable"
              label="is Vat Applicable"
              onChange={(e) => {
                setTaxInfo('isVatApplicable',e.target.checked);
              }}
              checked={initialTaxValuesInfo.isVatApplicable}
            />
          </Form.Group>
        </Col>
      </Row>
      {/* </form> */}
    </React.Fragment>
  );
};
export default TaxSetup;
