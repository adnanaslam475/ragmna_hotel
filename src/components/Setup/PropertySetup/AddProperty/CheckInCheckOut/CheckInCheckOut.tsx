import React, { useEffect } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckInCheckOut.scss";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useReservationDetailsMutation } from "../Reservation/reservationApi";
import { PropertySetuptypes } from "../types";
import { DangerLeft, Success } from "../../../../../Redux/Services/toaster-service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import {
  getSettingByTypeId,
  saveSettingByTypeId,
} from "../Reservation/reservationSlice";

const CheckInCheckOut = () => {
  const dispatch = useDispatch<AppDispatch>();
  let { id } = useParams();

  const getConfig = async () => {
    try {
      let payload = {
        id,
        typeId: 1,
      };
      const response: any = await dispatch(
        getSettingByTypeId(payload)
      ).unwrap();
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getConfig();
    }
  }, [id]);

  const onSubmit = async (values) => {
    try {
      let payload = Object.assign({}, values);
      payload["propertyId"] = id;
      payload["type"] = PropertySetuptypes.CheckIn_Checkout;
      payload["configurations"] = {
        checkInTime: values.checkInTime,
        checkOutTime: values.checkOutTime,
        autoGuestRegistrationCreationDuringCheckIn:
          values.autoGuestRegistrationCreationDuringCheckIn,
        autoGuestStatementUponCheckInIfTheRoomIsDirty:
          values.autoGuestStatementUponCheckInIfTheRoomIsDirty,
        sendNotificationToConfirmRoomIfDirty:
          values.sendNotificationToConfirmRoomIfDirty,
        allowNonZeroBalanceDuringCheckout:
          values.allowNonZeroBalanceDuringCheckout,
        allowRefundApplyUponCheckOut: values.allowRefundApplyUponCheckOut,
        autoRefundApplyUponCheckOut: values.autoRefundApplyUponCheckOut,
        includeRoomMovesOnArrivalAndDepartureList:
          values.includeRoomMovesOnArrivalAndDepartureList,
      };
      let deletekeys = [
        "checkInTime",
        "checkOutTime",
        "autoGuestRegistrationCreationDuringCheckIn",
        "autoGuestStatementUponCheckInIfTheRoomIsDirty",
        "sendNotificationToConfirmRoomIfDirty",
        "allowNonZeroBalanceDuringCheckout",
        "allowRefundApplyUponCheckOut",
        "autoRefundApplyUponCheckOut",
        "includeRoomMovesOnArrivalAndDepartureList",
      ];
      for (let i = 0; i < deletekeys.length; i++) {
        delete payload[deletekeys[i]];
      }
      let responce = await dispatch(saveSettingByTypeId(payload)).unwrap();
      Success(" Check-in Check-out details has been saved");
      //   await reservationDetails(payload);
    } catch (err: any) {
        DangerLeft("Something went wrong")
    }
  };

  const initialValues = {
    checkInTime: "",
    checkOutTime: "",
    autoGuestRegistrationCreationDuringCheckIn: false,
    autoGuestStatementUponCheckInIfTheRoomIsDirty: false,
    sendNotificationToConfirmRoomIfDirty: false,
    allowNonZeroBalanceDuringCheckout: false,
    allowRefundApplyUponCheckOut: false,
    autoRefundApplyUponCheckOut: false,
    includeRoomMovesOnArrivalAndDepartureList: false,
  };
  const validationSchema = Yup.object({
    checkInTime: Yup.string(),
    checkOutTime: Yup.string(),
    autoGuestRegistrationCreationDuringCheckIn: Yup.boolean(),
    autoGuestStatementUponCheckInIfTheRoomIsDirty: Yup.boolean(),
    sendNotificationToConfirmRoomIfDirty: Yup.boolean(),
    allowNonZeroBalanceDuringCheckout: Yup.boolean(),
    allowRefundApplyUponCheckOut: Yup.boolean(),
    autoRefundApplyUponCheckOut: Yup.boolean(),
    includeRoomMovesOnArrivalAndDepartureList: Yup.boolean(),
  });

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row className="Contect-details p-4 mb-4">
          <Col lg={6} md={12} className="mt-5 mb-2">
            <form className="date-picker-style" noValidate>
              <TextField
                label="Check-In Time"
                id="checkInTime"
                type="time"
                value={values.checkInTime}
                className="date-picker-textfield"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                onChange={handleChange}
              />
            </form>
          </Col>
          <Col lg={6} md={12} className="mt-5 mb-2">
            <form className="Check-Out Time" noValidate>
              <TextField
                label="Check-Out Time"
                id="checkOutTime"
                type="time"
                value={values.checkOutTime}
                className="date-picker-textfield"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                onChange={handleChange}
              />
            </form>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="autoGuestRegistrationCreationDuringCheckIn"
                label="Auto Guest Registration Creation During Check-In"
                onChange={(e) => {
                  setFieldValue(
                    "autoGuestRegistrationCreationDuringCheckIn",
                    e.target.checked
                  );
                }}
                checked={values.autoGuestRegistrationCreationDuringCheckIn}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="autoGuestStatementUponCheckInIfTheRoomIsDirty"
                label="Auto Guest Statement Upon Check-In If The Room Is Dirty"
                onChange={(e) => {
                  setFieldValue(
                    "autoGuestStatementUponCheckInIfTheRoomIsDirty",
                    e.target.checked
                  );
                }}
                checked={values.autoGuestStatementUponCheckInIfTheRoomIsDirty}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="sendNotificationToConfirmRoomIfDirty"
                label="Send Notification To Confirm Room If Dirty"
                onChange={(e) => {
                  setFieldValue(
                    "sendNotificationToConfirmRoomIfDirty",
                    e.target.checked
                  );
                }}
                checked={values.sendNotificationToConfirmRoomIfDirty}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="allowNonZeroBalanceDuringCheckout"
                label="Allow Non-Zero Balance During Checkout"
                onChange={(e) => {
                  setFieldValue(
                    "allowNonZeroBalanceDuringCheckout",
                    e.target.checked
                  );
                }}
                checked={values.allowNonZeroBalanceDuringCheckout}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="allowRefundApplyUponCheckOut"
                label="Allow Refund Apply Upon CheckOut"
                onChange={(e) => {
                  setFieldValue(
                    "allowRefundApplyUponCheckOut",
                    e.target.checked
                  );
                }}
                checked={values.allowRefundApplyUponCheckOut}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="autoRefundApplyUponCheckOut"
                label="Auto Refund Apply Upon CheckOut"
                onChange={(e) => {
                  setFieldValue(
                    "autoRefundApplyUponCheckOut",
                    e.target.checked
                  );
                }}
                checked={values.autoRefundApplyUponCheckOut}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center my-2">
            <Form.Group>
              <Form.Check
                className="ps-6 check-switch-style d-flex align-items-center"
                type="switch"
                id="includeRoomMovesOnArrivalAndDepartureList"
                label="Include Room Moves On Arrival And Departure-List"
                onChange={(e) => {
                  setFieldValue(
                    "includeRoomMovesOnArrivalAndDepartureList",
                    e.target.checked
                  );
                }}
                checked={values.includeRoomMovesOnArrivalAndDepartureList}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4 me-3">
          <Button disabled={!id} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckInCheckOut;
