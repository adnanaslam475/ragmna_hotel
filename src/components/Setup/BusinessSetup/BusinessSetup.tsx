import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { AppDispatch } from "../../../Redux/Store";
import { useUser } from "../../Authentication/firebaseAuth/firebaseAuthSlice";
import { Currency } from "../../Types/Types";
import "./BusinessSetup.scss";
import * as Yup from "yup";
import { getBussinesById, updateBusiness } from "./businessSetupSlice";
import { BusinessInfo } from "./types";

const Currencies: Currency[] = [
  { value: "Rupee", label: "Rupee" },
  { value: "Dollar", label: "Dollar" },
  { value: "Ruble", label: "Ruble" },
  { value: "Yen", label: "Yen" },
];
const TimeZones: Currency[] = [
  { value: "(GMT+00:00) Default", label: "(GMT+00:00) Default" },
  {
    value: "(GMT+05:00) Islamabad,Karachi",
    label: "(GMT+05:00) Islamabad,Karachi",
  },
  {
    value: "(GMT+05:30) Chennai, Kolkata, Mumbai,New Delhi",
    label: "(GMT+05:30) Chennai, Kolkata, Mumbai,New Delhi",
  },
  {
    value: "(GMT+09:00) Osaka,Sapporo, Tokyo",
    label: "(GMT+09:00) Osaka,Sapporo, Tokyo",
  },
  {
    value: "(GMT+10:30) Lord Howe Island",
    label: "(GMT+10:30) Lord Howe Island",
  },
];

const BusinessSetup = () => {
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  const initialValues:BusinessInfo = {
    name: "",
    crNumber: "",
    vatNumber: "",
    businessContactPerson: "",
    businessContactNumber: 0,
    logo: "",
    currency: "",
    timeZone: "",
  }

  const validationSchema = Yup.object({
    name: Yup.string(),
    crNumber: Yup.string(),
    vatNumber: Yup.string(),
    businessContactPerson: Yup.string(),
    businessContactNumber: Yup.number(),
    logo: Yup.string(),
    currency: Yup.string(),
    timeZone: Yup.string(),
  })

  // const { data, isError, isLoading } = useGetSupplierByIdQuery({ id: user.supplierId })
  const onSubmit = async (e) => {
    try {
      let payload: any = Object.assign({}, values);
      payload["contact"] = {
        name: values.businessContactPerson,
        phone: values.businessContactNumber,
      };
      payload["id"] = user.supplierId;
      delete payload["businessContactPerson"];
      delete payload["businessContactNumber"];
      await dispatch(updateBusiness(payload));
      //   await updateSupplierById(payload);
    } catch (err: any) {
      console.log(err, "err");
    }
    e.preventDefault();
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
  
  const getBySupplierId = async () => {
    try {
      let response: any = await dispatch(
        getBussinesById(user.supplierId)
      ).unwrap();
      console.log(response);
      if (response?.data) {
        setValues({
          ...values,
          name: response.data?.name,
          crNumber: response.data?.crNumber,
          vatNumber: response.data?.vatNumber,
          businessContactPerson: response.data?.contact?.name,
          businessContactNumber: response.data?.contact?.phone,
          logo: "",
          currency: "",
          timeZone: "",
        });
      }
    } catch (err: any) {
      console.log(err, "errrr");
    }
  };
  React.useEffect(() => {
    getBySupplierId();
  }, []);

  // const {
  //   name,
  //   crNumber,
  //   vatNumber,
  //   businessContactPerson,
  //   businessContactNumber,
  //   logo,
  //   currency,
  //   timeZone,
  // } = businessInfoParams;

  // const changeHandler = (e) => {
  //   setBusinessInfoParams({
  //     ...businessInfoParams,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  //   const [updateSupplierById, Result] = useUpdateSupplierByIdMutation();
  
  return (
    <div className="business-form">
      <h2>Business Information</h2>
      <form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <div className="control-group form-group">
            <label className="form-label">Business Name</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Business Name"
              name="name"
              value={values.name}
              onChange={(e) => {
                  handleChange(e);
                }}
            />
          </div>
          <div className="control-group form-group">
            <label className="form-label">CR Number</label>
            <input
              type="text"
              className="form-control required"
              placeholder="CR Number"
              name="crNumber"
              value={values.crNumber}
              onChange={(e) => {
                  handleChange(e);
                }}
            />
          </div>
          <div className="control-group form-group">
            <label className="form-label">VAT Number</label>
            <input
              type="text"
              className="form-control required"
              placeholder="VAT Number"
              name="vatNumber"
              value={values.vatNumber}
              onChange={(e) => {
                  handleChange(e);
                }}
            />
          </div>
          <div className="control-group form-group">
            <label className="form-label">Business Contact Person</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Business Contact Person"
              name="businessContactPerson"
              value={values.businessContactPerson}
              onChange={(e) => {
                  handleChange(e);
                }}
            />
          </div>
        </Col>
        <Col>
          <div className="control-group form-group">
            <label className="form-label">Business Contact Number</label>
            <input
              type="number"
              className="form-control required"
              placeholder="Business Contact Number"
              name="businessContactNumber"
              value={values.businessContactNumber}
              onChange={(e) => {
                  handleChange(e);
                }}
            />
          </div>
          <div className="control-group form-group mb-0">
            <label className="form-label">Logo</label>
            <Form.Control
              type="file"
              name="logo"
              value={values.logo}
              onChange={(e) => {
                  handleChange(e);
                }}
            />
          </div>
          <div className="control-group form-group">
            <label className="form-label">Currency </label>
            <Select
              classNamePrefix="Select"
              options={Currencies}
              placeholder="Select Currency"
              name="currency"
            />
          </div>
          <div className="control-group form-group">
            <label className="form-label">Time Zone</label>
            <Select
              classNamePrefix="Select"
              options={TimeZones}
              placeholder="Select Time Zone"
              name="timeZone"
            />
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-primary py-1 px-4 mb-1"
          type="submit"
        >
          Submit
        </Button>
      </div>
      </form>
    </div>
  );
};

export default BusinessSetup;
