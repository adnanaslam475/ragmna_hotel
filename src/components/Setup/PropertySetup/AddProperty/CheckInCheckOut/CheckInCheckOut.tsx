import React from 'react'
import { Button, Card, Col, Row, Form } from 'react-bootstrap'
import Select, { ActionMeta, Options } from 'react-select';
import { ErrorMessage, Form as FormikForm, Formik, useFormik } from 'formik'
import { CommanDropDownType, GoodFor, PropertyTypes, ProprtyInfo } from './../types'
import * as Yup from 'yup'
import "./CheckInCheckOut.scss"

const CheckInCheckOut = () => {
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
    }
    const validationSchema = Yup.object({
        checkInTime: Yup.string().required(),
        checkOutTime: Yup.string().required(),
        autoGuestRegistrationCreationDuringCheckIn: Yup.boolean().required(),
        autoGuestStatementUponCheckInIfTheRoomIsDirty: Yup.boolean().required(),
        sendNotificationToConfirmRoomIfDirty: Yup.boolean().required(),
        allowNonZeroBalanceDuringCheckout: Yup.boolean().required(),
        allowRefundApplyUponCheckOut: Yup.boolean().required(),
        autoRefundApplyUponCheckOut: Yup.boolean().required(),
        includeRoomMovesOnArrivalAndDepartureList: Yup.boolean().required(),
    })
    const onSubmit = (values) => {
        console.log("values", values);
    }
    const { handleChange, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    console.log(errors)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Row className='Contect-details p-4 mb-4'>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Check-In Time</label>
                            <input
                                type="text"
                                className={touched.checkInTime && errors.checkInTime ? "form-control required check-error-border" : "form-control required"}
                                placeholder="check-In Time"
                                name="checkInTime"
                                value={values.checkInTime}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Check-Out Time</label>
                            <input
                                type="text"
                                className={touched.checkOutTime && errors.checkOutTime ? "form-control required check-error-border" : "form-control required"}
                                placeholder="check-Out Time"
                                name="checkOutTime"
                                value={values.checkOutTime}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="autoGuestRegistrationCreationDuringCheckIn"
                                label="Auto Guest Registration Creation During Check-In"
                                onChange={(e) => {
                                    setFieldValue('autoGuestRegistrationCreationDuringCheckIn', e.target.checked)
                                }}
                                checked={values.autoGuestRegistrationCreationDuringCheckIn}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="autoGuestStatementUponCheckInIfTheRoomIsDirty"
                                label="Auto Guest Statement Upon Check-In If The Room Is Dirty"
                                onChange={(e) => {
                                    setFieldValue('autoGuestStatementUponCheckInIfTheRoomIsDirty', e.target.checked)
                                }}
                                checked={values.autoGuestStatementUponCheckInIfTheRoomIsDirty}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="sendNotificationToConfirmRoomIfDirty"
                                label="Send Notification To Confirm Room If Dirty"
                                onChange={(e) => {
                                    setFieldValue('sendNotificationToConfirmRoomIfDirty', e.target.checked)
                                }}
                                checked={values.sendNotificationToConfirmRoomIfDirty}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="allowNonZeroBalanceDuringCheckout"
                                label="Allow Non-Zero Balance During Checkout"
                                onChange={(e) => {
                                    setFieldValue('allowNonZeroBalanceDuringCheckout', e.target.checked)
                                }}
                                checked={values.allowNonZeroBalanceDuringCheckout}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="allowRefundApplyUponCheckOut"
                                label="Allow Refund Apply Upon CheckOut"
                                onChange={(e) => {
                                    setFieldValue('allowRefundApplyUponCheckOut', e.target.checked)
                                }}
                                checked={values.allowRefundApplyUponCheckOut}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="autoRefundApplyUponCheckOut"
                                label="Auto Refund Apply Upon CheckOut"
                                onChange={(e) => {
                                    setFieldValue('autoRefundApplyUponCheckOut', e.target.checked)
                                }}
                                checked={values.autoRefundApplyUponCheckOut}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center my-2'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 check-switch-style d-flex align-items-center"
                                type="switch"
                                id="includeRoomMovesOnArrivalAndDepartureList"
                                label="Include Room Moves On Arrival And Departure-List"
                                onChange={(e) => {
                                    setFieldValue('includeRoomMovesOnArrivalAndDepartureList', e.target.checked)
                                }}
                                checked={values.includeRoomMovesOnArrivalAndDepartureList}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className='d-flex justify-content-end mt-4 me-3'>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </div >

    )
}

export default CheckInCheckOut