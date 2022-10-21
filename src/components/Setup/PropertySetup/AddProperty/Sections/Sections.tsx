import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CommanDropDownType } from "../types";
import Select from "react-select";
import "./Sections.scss";
import * as Yup from "yup";
import { useFormik } from "formik";

export interface SectionsProps {
  sectionArray: any;
  setSectionArray: any;
}

const Sections = (props: SectionsProps) => {
  const { sectionArray, setSectionArray } = props;
  const [selectValues, setSelectValues] = useState({
    name: "",
    quantity: 0,
    allowedFor: "",
    isNonSmoking: false,
    isActive: true,
    virtualTourLink: "",
  });

  // const [initialValues, setInitialValues] = useState(initialSelectValues);

  // const validationSchema = Yup.object({
  //   name: Yup.string().required(),
  //   quantity: Yup.number().required(),
  //   allowedFor: Yup.string().required(),
  //   virtualTourLink: Yup.string().required(),
  //   isNonSmoking: Yup.boolean(),
  //   isActive: Yup.boolean(),
  // });

  // const onSubmit = () => {
  //   console.log(values,"values");

  //  };
  // const {
  //   handleChange,
  //   handleSubmit,
  //   values,
  //   errors,
  //   touched,
  //   setValues,
  //   setFieldValue,
  // } = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit,
  // });
  // const [sectionArray , setSectionArray] = useState<any>([])

  const deleteDetail = (index) => {
    let sectionData = sectionArray.filter((val,i)=>{
      return i != index
    })
    setSectionArray([...sectionData])
  }

  const editDetail = (index) => {
    let editdata = sectionArray.find((val,i)=> i == index  )
    setSelectValues({...editdata})
  }

  const onSubmit = () => {
    sectionArray.push(selectValues);
    setSectionArray(sectionArray);
    setSelectValues({
      name: "",
      quantity: 0,
      allowedFor: "",
      isNonSmoking: false,
      isActive: true,
      virtualTourLink: "",
    })
  };

  const handleChange = (key, value) => {
    setSelectValues({ ...selectValues, [key]: value });
  };

  const allowFors: CommanDropDownType[] = [
    { value: "", label: "Select Allowed For" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  return (
    <React.Fragment>
      <Row className="section p-4 mb-4">
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={"form-control required"}
              placeholder="Name"
              name="name"
              value={selectValues.name}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control required"
              placeholder="Quantity"
              name="quantity"
              value={selectValues.quantity}
              onChange={(e) => {
                handleChange("quantity", e.target.value);
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
                (option) => option.value === selectValues.allowedFor
              )}
              placeholder="Select Allow For"
              name="allowedFor"
              onChange={(selectedOption: any) => {
                handleChange("allowedFor", selectedOption?.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Virtual Tour Link</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Virtual Tour Link"
              name="virtualTourLink"
              value={selectValues.virtualTourLink}
              onChange={(e) => {
                handleChange("virtualTourLink", e.target.value);
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
                handleChange("isNonSmoking", e.target.checked);
              }}
              checked={selectValues.isNonSmoking}
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
                handleChange("isActive", e.target.checked);
              }}
              checked={selectValues.isActive}
            />
          </Form.Group>
        </Col>
        <Col
          lg={6}
          md={12}
          className="align-items-center d-flex justify-content-end mt-6"
        >
          <div className="control-group form-group">
            <Button onClick={()=>{onSubmit()}}> Add </Button>
          </div>
        </Col>
      </Row>
      <Row className="section p-4 mb-4">
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Allow For</th>
              <th>Non Smoking</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {sectionArray.map((val: any, index) => (
              <Fragment key={index}>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.quantity}</td>
                  <td>{val.allowedFor}</td>
                  <td>{val.isNonSmoking.toString()}</td>
                  <td>{val.isActive.toString()}</td>
                  <td className="table-icon">
                      <i className="icon fe fe-edit-2" onClick={()=>{editDetail(index)}}/>
                      <i className="icon fe fe-trash-2" onClick={(e)=>{deleteDetail(index)}}/>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </Row>
    </React.Fragment>
  );
};

export default Sections;
