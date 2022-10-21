import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { AppDispatch } from "../../../../../Redux/Store";
import {
  deleteTaxData,
  getTaxConfigDetails,
  useTaxData,
} from "./taxSetupSlice";
import "./TaxSetup.scss";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Select from "react-select";
import { CommanDropDownType } from "../types";
import { Success } from "../../../../../Redux/Services/toaster-service";

export interface TaxSetupProps {
  initialTaxValuesInfo: any;
  setTaxInfo: any;
}

const TaxSetup = (props: TaxSetupProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { taxData } = useTaxData();

  const { initialTaxValuesInfo, setTaxInfo } = props;

  const TypeList: any = [
    { value: "", label: "Select Types" },
    { value: "Tax", label: "Tax" },
    { value: "Fee", label: "Fee" },
  ];

  const CalculationTypes: any = [
    { value: "", label: "Select Types" },
    { value: "Percentage", label: "Percentage per charge" },
    { value: "Fixed", label: "USD per charge" },
  ];

  const ledgerAccoutTypes: any = [
    { value: "", label: "Select Ledger Account" },
    { value: "Sales Tax", label: "Sales Tax" },
    { value: "Occupancy Tax", label: "Occupancy Tax" },
    {
      value: "Tax Adjustment",
      label: "Tax Adjustment",
    },
  ];

  const { id } = useParams<string>();

  const deleteTaxDetail = async (taxId) => {
    try {
      let payload = {
        id,
        taxId: taxId,
      };
      await dispatch(deleteTaxData(payload)).unwrap;
      Success('Tax Detail has been Deleted')
      if(id){
        dispatch(getTaxConfigDetails(id)).unwrap();
      }
    } catch (err: any) {
      console.log("err");
    }
  };

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
                setTaxInfo("name", e.target.value);
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
                setTaxInfo("shortCode", e.target.value);
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
            onDayChange={(e) => setTaxInfo("startDate", e)}
          />
        </Col>
        <Col lg={6} className="date-picker">
          <label className="form-label">End Date</label>
          <DayPickerInput
            dayPickerProps={{ disabledDays: { before: new Date() } }}
            format="DD/MM/YYYY"
            placeholder="End Date"
            value={initialTaxValuesInfo.endDate}
            onDayChange={(e) => setTaxInfo("endDate", e)}
          />
        </Col>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Type</label>
            <Select
              classNamePrefix="Select"
              options={TypeList}
              value={TypeList.filter(
                (option) => option.value === initialTaxValuesInfo.type
              )}
              placeholder="Select Type"
              name="type"
              onChange={(selectedOption: any) => {
                setTaxInfo("type", selectedOption?.value);
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
                (option) =>
                  option.value === initialTaxValuesInfo.calculationType
              )}
              placeholder="Select Calculation Type"
              name="calculationType"
              onChange={(selectedOption: any) => {
                setTaxInfo("calculationType", selectedOption?.value);
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
                setTaxInfo("surcharge", e.target.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="control-group form-group">
            <label className="form-label">Ledger Account</label>
            <Select
              classNamePrefix="Select"
              options={ledgerAccoutTypes}
              value={ledgerAccoutTypes.filter(
                (option) =>
                  option.value === initialTaxValuesInfo.calculationType
              )}
              placeholder="Select Ledger Account"
              name="ledgerAccoutType"
              onChange={(selectedOption: any) => {
                setTaxInfo("ledgerAccoutType", selectedOption?.value);
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
                setTaxInfo("isVatApplicable", e.target.checked);
              }}
              checked={initialTaxValuesInfo.isVatApplicable}
            />
          </Form.Group>
        </Col>
      </Row>
      {/* </form> */}
      <Row className="Contect-details p-4 mb-4">
        <h4>Tax Setup Details</h4>
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Vat Applicable</th>
              <th>Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {taxData &&
              taxData.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.name}</td>
                    <td>
                      {new Date(val.startDate).getDate() +
                        "-" +
                        (new Date(val.startDate).getMonth() + 1) +
                        "-" +
                        new Date(val.startDate).getFullYear()}
                    </td>
                    <td>
                      {new Date(val.endDate).getDate() +
                        "-" +
                        (new Date(val.endDate).getMonth() + 1) +
                        "-" +
                        new Date(val.endDate).getFullYear()}
                    </td>
                    <td>{val.type}</td>
                    <td>{val.surcharge}</td>
                    <td>{val.isVatApplicable.toString()}</td>
                    <td>{val.isActive.toString()}</td>
                    <td className="action-icon">
                      <i className="icon fe fe-edit" 
                      />
                      <i
                        className="icon fe fe-trash-2"
                        onClick={() => {
                          deleteTaxDetail(val._id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Row>
    </React.Fragment>
  );
};
export default TaxSetup;
