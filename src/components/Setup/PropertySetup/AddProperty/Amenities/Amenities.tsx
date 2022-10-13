import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Amenities.scss";
import * as Yup from "yup";
import Select from "react-select";
import { AmenitiesDetails, CommanDropDownType } from "../types";
import { useParams } from "react-router-dom";
import {
  DangerLeft,
  Success,
} from "../../../../../Redux/Services/toaster-service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import {
  addAmenities,
  deleteAmenities,
  getAmenities,
  useAmenitiesList,
} from "./amenitiesSlice";

const Amenities = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getAmenitiDetails = async () => {
    try {
      const response: any = await dispatch(getAmenities()).unwrap();
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };

  let { id } = useParams();

  useEffect(() => {
    getAmenitiDetails();
  }, []);
  const { amenitesList } = useAmenitiesList();

  const initialValues = {
    name: "",
    description: "",
    type: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    type: Yup.string(),
  });

  const onSubmit = async (values) => {
    try {
      let payload = Object.assign({}, values);
      payload["propertyId"] = id;
      payload["type"] = parseInt(payload.type);
      let responce = await dispatch(addAmenities(payload)).unwrap();
      Success(" Amenities had been added");
    } catch (err: any) {
      DangerLeft("Something went wrong");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await dispatch(deleteAmenities(id)).unwrap;
      dispatch(getAmenities()).unwrap();
    } catch (err: any) {}
  };

  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const amenitiesTypes: CommanDropDownType[] = [
    { value: "", label: "Select Amenities For" },
    { value: "0", label: "Hotel" },
    { value: "1", label: "Room" },
    { value: "2", label: "Both" },
  ];

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Row className="Amenities-form p-4 mb-4">
          <Col lg={6} md={12}>
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
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="control-group form-group">
              <label className="form-label">Description</label>
              <input
                type="text"
                className={
                  touched.description && errors.description
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="control-group form-group">
              <label className="form-label">Amenities Type</label>
              <Select
                classNamePrefix="Select"
                options={amenitiesTypes}
                value={amenitiesTypes.filter(
                  (option) => option.value === values.type
                )}
                placeholder="Select Amenities Type"
                name="type"
                onChange={(selectedOption: any, e) => {
                  handleChange("type")(selectedOption?.value);
                }}
              />
            </div>
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
      <Row className="Amenities-form p-4 mb-4">
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {amenitesList.map((val: any) => (
              <Fragment key={val._id}>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.description}</td>
                  <td>{val.type}</td>
                  <td>
                    {/* <Button
                                            variant=""
                                            className="btn btn-primary me-1"
                                            type="button"
                                            onClick={(event) => handleEditClick(event, contact)}
                                        >
                                            Edit
                                        </Button> */}
                    <Button
                      variant=""
                      className="btn btn-danger me-1"
                      type="button"
                      onClick={() => handleDeleteClick(val._id)}
                    >
                      Delete
                    </Button>
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

export default Amenities;
