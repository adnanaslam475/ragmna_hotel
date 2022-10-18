import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import "./Reservation.scss";
import { PropertySetuptypes } from "../types";
import { useParams } from "react-router-dom";
import { DangerLeft, Success } from "../../../../../Redux/Services/toaster-service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { getSettingByTypeId, saveSettingByTypeId } from "./reservationSlice";

export interface ReservationProps {
  values: any;
  handleChange: any;
  handleSubmit: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const Reservation = (props:ReservationProps) => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = props;
  // const dispatch = useDispatch<AppDispatch>();
  let { id } = useParams();
  // const getConfig = async () => {
  //   try {
  //     let payload = {
  //       id,
  //       typeId: 0,
  //     };
  //     const response: any = await dispatch(
  //       getSettingByTypeId(payload)
  //     ).unwrap();
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (id) {
  //     getConfig();
  //   }
  // }, [id]);

  // const onSubmit = async (values) => {
  //   try {
  //     let payload = Object.assign({}, values);
  //     payload["propertyId"] = id;
  //     payload["type"] = PropertySetuptypes.Reservation;
  //     payload["configurations"] = {
  //       automaticRoomAssignment: values.automaticRoomAssignment,
  //       emailDisplayName: values.emailDisplayName,
  //       replyToEmailAddress: values.replyToEmailAddress,
  //       sendCCOnAllEmails: values.sendCCOnAllEmails,
  //       setOccupiedRoomToDirty: values.setOccupiedRoomToDirty,
  //       allowOverBookingManually: values.allowOverBookingManually,
  //       addMarketSegment: [],
  //     };
  //     let deletekeys = [
  //       "automaticRoomAssignment",
  //       "emailDisplayName",
  //       "replyToEmailAddress",
  //       "sendCCOnAllEmails",
  //       "setOccupiedRoomToDirty",
  //       "allowOverBookingManually",
  //       "addMarketSegment",
  //     ];
  //     for (let i = 0; i < deletekeys.length; i++) {
  //       delete payload[deletekeys[i]];
  //     }
  //     //   await reservationDetails(payload);
  //     let responce = await dispatch(saveSettingByTypeId(payload)).unwrap();
  //     Success(" Reservation details has been saved");
  //   } catch (err: any) {
  //       DangerLeft("Something went wrong")
  //   }
  // };

  // const initialValues = {
  //   automaticRoomAssignment: false,
  //   emailDisplayName: "",
  //   replyToEmailAddress: "",
  //   sendCCOnAllEmails: "",
  //   setOccupiedRoomToDirty: false,
  //   allowOverBookingManually: false,
  //   addMarketSegment: [],
  // };

  // const validationSchema = Yup.object({
  //   automaticRoomAssignment: Yup.boolean(),
  //   emailDisplayName: Yup.string(),
  //   replyToEmailAddress: Yup.string(),
  //   sendCCOnAllEmails: Yup.string(),
  //   setOccupiedRoomToDirty: Yup.boolean(),
  //   allowOverBookingManually: Yup.boolean(),
  //   addMarketSegment: Yup.array(),
  // });

  // const { handleChange, handleSubmit, values, errors, touched, setFieldValue } =
  //   useFormik({
  //     initialValues,
  //     validationSchema,
  //     onSubmit,
  //   });

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Row className="Reservation-details p-4 mb-4">
          <Col lg={6} md={12}>
            <div className="control-group form-group">
              <label className="form-label">Email Display Name</label>
              <input
                type="text"
                className={
                  touched.emailDisplayName && errors.emailDisplayName
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Email Display Name"
                name="emailDisplayName"
                value={values.emailDisplayName}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="control-group form-group">
              <label className="form-label">Replay TO Email Address</label>
              <input
                type="text"
                className={
                  touched.replyToEmailAddress && errors.replyToEmailAddress
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Replay TO Email Address"
                name="replyToEmailAddress"
                value={values.replyToEmailAddress}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="control-group form-group">
              <label className="form-label">Send CCOn All Emails</label>
              <input
                type="text"
                className={
                  touched.sendCCOnAllEmails && errors.sendCCOnAllEmails
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Send CCOn All Emails"
                name="sendCCOnAllEmails"
                value={values.sendCCOnAllEmails}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center">
            <Form.Group>
              <Form.Check
                className="ps-6 switch-style d-flex align-items-center my-2"
                type="switch"
                id="setOccupiedRoomToDirty"
                label="Set Occupied Room To Dirty"
                onChange={(e) => {
                  setFieldValue("setOccupiedRoomToDirty", e.target.checked);
                }}
                checked={values.setOccupiedRoomToDirty}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center">
            <Form.Group>
              <Form.Check
                className="ps-6 switch-style d-flex align-items-center my-2"
                type="switch"
                id="automaticRoomAssignment"
                label="Automatic Room Assignment"
                onChange={(e) => {
                  setFieldValue("automaticRoomAssignment", e.target.checked);
                }}
                checked={values.automaticRoomAssignment}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center">
            <Form.Group>
              <Form.Check
                className="ps-6 switch-style d-flex align-items-center my-2"
                type="switch"
                id="allowOverBookingManually"
                label="Allow Over Booking Manually"
                onChange={(e) => {
                  setFieldValue("allowOverBookingManually", e.target.checked);
                }}
                checked={values.allowOverBookingManually}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4 me-3">
          <Button disabled={!id} type="submit">
            Save & Next
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Reservation;
