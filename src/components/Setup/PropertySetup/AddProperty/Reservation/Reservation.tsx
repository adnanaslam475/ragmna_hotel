import React from 'react'
import { ErrorMessage, Form as FormikForm, Formik, useFormik } from 'formik'
import { Col, Form, Row } from 'react-bootstrap'
import * as Yup from 'yup'
import './Reservation.scss'
import { useProperyDetails } from '../propertyInfoSlice'


const Reservation = () => {

    const onSubmit = (values) => {
        console.log(values);
    }

    const {property} = useProperyDetails()
    console.log(property,"property");
    

    const initialValues = {
        automaticRoomAssignment: false,
        emailDisplayName: '',
        replyToEmailAddress: '',
        sendCCOnAllEmails: '',
        setOccupiedRoomToDirty: '',
        allowOverBookingManually: false,
        addMarketSegment: [],
    }

    const validationSchema = Yup.object({
        automaticRoomAssignment: Yup.boolean(),
        emailDisplayName: Yup.string().required(),
        replyToEmailAddress: Yup.string().required(),
        sendCCOnAllEmails: Yup.string().required(),
        setOccupiedRoomToDirty: Yup.string().required(),
        allowOverBookingManually: Yup.boolean(),
        addMarketSegment: Yup.array(),
    })

    const { handleChange, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Row className='p-4 mb-4'>
                    <Col lg={6} md={12} className='d-flex align-items-center'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 switch-style d-flex align-items-center"
                                type="switch"
                                id="automaticRoomAssignment"
                                label="Automatic Room Assignment"
                                onChange={(e) => {
                                    setFieldValue('automaticRoomAssignment', e.target.checked)
                                }}
                                checked={values.automaticRoomAssignment}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="control-group form-group">
                            <label className="form-label">Email Display Name</label>
                            <input
                                type="email"
                                className={touched.emailDisplayName && errors.emailDisplayName ? "form-control required error-border" : "form-control required"}
                                placeholder="Email Display Name"
                                name="emailDisplayName"
                                value={values.emailDisplayName}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="control-group form-group">
                            <label className="form-label">Replay TO Email Address</label>
                            <input
                                type="email"
                                className={touched.replyToEmailAddress && errors.replyToEmailAddress ? "form-control required error-border" : "form-control required"}
                                placeholder="Replay TO Email Address"
                                name="replyToEmailAddress"
                                value={values.replyToEmailAddress}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="control-group form-group">
                            <label className="form-label">Send CCOn All Emails</label>
                            <input
                                type="email"
                                className={touched.sendCCOnAllEmails && errors.sendCCOnAllEmails ? "form-control required error-border" : "form-control required"}
                                placeholder="Send CCOn All Emails"
                                name="sendCCOnAllEmails"
                                value={values.sendCCOnAllEmails}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="control-group form-group">
                            <label className="form-label">Set Occupied Room To Dirty</label>
                            <input
                                type="email"
                                className={touched.setOccupiedRoomToDirty && errors.setOccupiedRoomToDirty ? "form-control required error-border" : "form-control required"}
                                placeholder="Set Occupied Room To Dirty"
                                name="setOccupiedRoomToDirty"
                                value={values.setOccupiedRoomToDirty}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='d-flex align-items-center'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 switch-style d-flex align-items-center"
                                type="switch"
                                id="allowOverBookingManually"
                                label="Allow Over Booking Manually"
                                onChange={(e) => {
                                    setFieldValue('allowOverBookingManually', e.target.checked)
                                }}
                                checked={values.allowOverBookingManually}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </form>
        </React.Fragment>
    )
}

export default Reservation