import React, { useState } from 'react'
import { Button, Card, Col, Row, Form } from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import './PropertyInfo.scss'
import Select, { ActionMeta, Options } from 'react-select';
import { CommanDropDownType, GoodFor, PropertyTypes, ProprtyInfo } from './../types'
import { ErrorMessage, Form as FormikForm, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { useUser } from '../../../../Authentication/firebaseAuth/firebaseAuthSlice';
import { useAddPropertyMutation } from '../propertyInfoApi'
import { useRef } from 'react';

const PropertyInfo = () => {

    const goodFors = [
        { value: '', label: "Select Good For" },
        { value: "Singles", label: "Singles" },
        { value: "Family", label: "Family" },
        { value: "Both", label: "Both" },
    ]

    const propertyTypes: CommanDropDownType[] = [
        { value: '', label: "Select Property Type" },
        { value: "Rented", label: "Rented" },
    ]

    const [contactDetails, setContactDetails] = React.useState({
        Cname: "",
        CphoneNumber: "",
        waNumber: "",
    })
    const [ownerDetails, setOwnerDetails] = React.useState({
        Oname: "",
        OphoneNumber: "",
    })

    const phoneChange = (e, type, phoneNumber) => {

        switch (type) {
            case 'contect':
                setContactDetails({
                    ...contactDetails,
                    [phoneNumber]: e
                })
                break;
            case 'owner':
                setOwnerDetails({
                    ...ownerDetails,
                    [phoneNumber]: e
                })
                break;

            default:
                break;
        }
    };

    const initialValues = {
        name: "",
        email: "",
        propertyType: "",
        goodFor: "",
        space: 0,
        Cname: "",
        CphoneNumber: "",
        waNumber: "",
        Oname: "",
        OphoneNumber: "",
        address: "",
        city: "",
        state: "",
        country: "",
        latitude: "",
        longitude: "",
        images: [],
        availableForEntireRental: false,
        strictlyEntireRental: false
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Please Enter Name'),
        email: Yup.string().email('Invalid Email').required('Please Enter Email'),
        propertyType: Yup.string().required('Please Select Propert Type'),
        goodFor: Yup.string().required('Please Select Good For'),
        space: Yup.number(),
        Cname: Yup.string().required('Please Enter Name'),
        CphoneNumber: Yup.string(),
        waNumber: Yup.string(),
        Oname: Yup.string().required('Please Enter Name'),
        OphoneNumber: Yup.string(),
        address: Yup.string().required('Please Enter Address'),
        city: Yup.string().required('Please Enter City'),
        state: Yup.string().required('Please Enter State'),
        country: Yup.string().required('Please Enter Country'),
        latitude: Yup.string().required('Please Enter Latitude'),
        longitude: Yup.string().required('Please Enter Longitude'),
        images: Yup.array(),
        availableForEntireRental: Yup.boolean(),
        strictlyEntireRental: Yup.boolean()
    })

    const { user } = useUser()

    const [addProperty, Result] = useAddPropertyMutation();

    const onSubmit = async (values) => {
        try {
            let payload = Object.assign({}, values);
            payload['supplierId'] = user.supplierId
            payload['contact'] = {
                'name': values.Cname,
                "phoneNumber": contactDetails.CphoneNumber,
                "waNumber": contactDetails.waNumber
            }
            payload['location'] = {
                "address": values.address,
                "city": values.city,
                "state": values.state,
                "country": values.country,
                "latitude": values.latitude,
                "longitude": values.longitude
            }
            payload['owner'] = {
                "name": values.Oname,
                "phoneNumber": ownerDetails.OphoneNumber
            }
            payload['images'] = []
            // payload['availableForEntireRental'] = isChecked
            let deletekeys = [
                'Cname', 'CphoneNumber', 'waNumber', 'address', 'city', 'state', 'country', 'latitude', 'longitude', 'Oname', 'OphoneNumber'
            ]
            for (let i = 0; i < deletekeys.length; i++) {
                delete payload[deletekeys[i]]
            }
            await addProperty(payload);
            console.log(payload, "payload");
        } catch (err: any) {
            console.log(err, "err");
        }
    }

    const { handleChange, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Row className='Contect-details p-4 mb-4'>
                    <h4>
                        Basic Info
                    </h4>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Property Name</label>
                            <input
                                type="text"
                                className={touched.name && errors.name ? "form-control required error-border" : "form-control required"}
                                placeholder="Property Name"
                                name="name"
                                value={values.name}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Property Type</label>
                            <Select
                                classNamePrefix="Select"
                                options={propertyTypes}
                                value={propertyTypes.filter((option) => option.value === values.propertyType)}
                                placeholder='Select PropertyType'
                                name="propertyType"
                                onChange={(selectedOption: any) => {
                                    handleChange('propertyType')(selectedOption?.value)
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className={touched.email && errors.email ? "form-control required error-border" : "form-control required"}
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Good For</label>
                            <Select<CommanDropDownType>
                                classNamePrefix="Select"
                                options={goodFors}
                                value={goodFors.filter((option) => option.value === values.goodFor)}
                                placeholder='Select Good For'
                                name="goodFor"
                                onChange={(selectedOption: any) => {
                                    handleChange('goodFor')(selectedOption?.value)
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Space</label>
                            <input
                                type="number"
                                className={touched.space && errors.space ? "form-control required error-border" : "form-control required"}
                                placeholder="Space"
                                name="space"
                                value={values.space}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}></Col>
                    <Col lg={6} className='my-3'>
                        <Form.Group>
                            <Form.Check
                                className="ps-6 pro-switch-style d-flex align-items-center"
                                type="switch"
                                id="availableForEntireRental"
                                label="Available For EntireRental"
                                onChange={(e) => {
                                    setFieldValue('availableForEntireRental', e.target.checked)
                                }}
                                checked={values.availableForEntireRental}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}></Col>
                    <Col lg={6} >
                        <Form.Group>
                            <Form.Check
                                className="ps-6 pro-switch-style d-flex align-items-center"
                                type="switch"
                                id="strictlyEntireRental"
                                label="Strictly EntireRental"
                                onChange={(e) => {
                                    setFieldValue('strictlyEntireRental', e.target.checked)
                                }}
                                checked={values.strictlyEntireRental}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='Contect-details p-4 mb-4'>
                    <h4> Addresss</h4>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className={touched.address && errors.address ? "form-control required error-border" : "form-control required"}
                                placeholder="Address"
                                name="address"
                                value={values.address}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                className={touched.city && errors.city ? "form-control required error-border" : "form-control required"}
                                placeholder="City"
                                name="city"
                                value={values.city}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">State</label>
                            <input
                                type="text"
                                className={touched.state && errors.state ? "form-control required error-border" : "form-control required"}
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Country</label>
                            <input
                                type="text"
                                className={touched.country && errors.country ? "form-control required error-border" : "form-control required"}
                                placeholder="Country"
                                name="country"
                                value={values.country}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Latitude</label>
                            <input
                                type="text"
                                className={touched.latitude && errors.latitude ? "form-control required error-border" : "form-control required"}
                                placeholder="Latitude"
                                name="latitude"
                                value={values.latitude}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Longitude</label>
                            <input
                                type="text"
                                className={touched.longitude && errors.longitude ? "form-control required error-border" : "form-control required"}
                                placeholder="Longitude"
                                name="longitude"
                                value={values.longitude}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className='Contect-details p-4'>
                    <h4>
                        Contect Details
                    </h4>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className={touched.Cname && errors.Cname ? "form-control required error-border" : "form-control required"}
                                placeholder="Name"
                                name="Cname"
                                value={values.Cname}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <label className="form-label">Phone Number</label>
                        <div className="wrap-input100 validate-input input-group property-phone-wrap">
                            <div
                                // className={touched.CphoneNumber && errors.CphoneNumber ? "CountrySelector Property-phone phone-error-border" : "CountrySelector Property-phone"}
                                className="CountrySelector Property-phone"
                            >
                                <PhoneInput
                                    country={"us"}
                                    value={values.CphoneNumber}
                                    inputProps={{ name: "CphoneNumber", required: true }}
                                    onChange={(e) => {
                                        phoneChange(e, "contect", "CphoneNumber")
                                        handleChange(e)
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <label className="form-label">Whatsapp Number</label>
                        <div className="wrap-input100 validate-input input-group property-phone-wrap">
                            <div
                                // className={touched.waNumber && errors.waNumber ? "CountrySelector Property-phone phone-error-border" : "CountrySelector Property-phone"}
                                className="CountrySelector Property-phone"
                            >
                                <PhoneInput
                                    country={"us"}
                                    value={values.waNumber}
                                    inputProps={{ name: "waNumber", required: true }}
                                    onChange={(e) => {
                                        phoneChange(e, "contect", "waNumber")
                                        handleChange(e)
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='Contect-details p-4 mt-4'>
                    <h4>
                        Owner Details
                    </h4>
                    <Col lg={6}>
                        <div className="control-group form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className={touched.Oname && errors.Oname ? "form-control required error-border" : "form-control required"}
                                placeholder="Name"
                                name="Oname"
                                value={values.Oname}
                                onChange={(e) => { handleChange(e) }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <label className="form-label">Phone Number</label>
                        <div className="wrap-input100 validate-input input-group property-phone-wrap">
                            <div
                                // className={touched.OphoneNumber && errors.OphoneNumber ? "CountrySelector Property-phone phone-error-border" : "CountrySelector Property-phone"}
                                className="CountrySelector Property-phone"
                            >
                                <PhoneInput
                                    country={"us"}
                                    inputProps={{ name: "OphoneNumber", required: true, }}
                                    value={values.OphoneNumber}
                                    onChange={(e) => {
                                        phoneChange(e, "owner", "OphoneNumber")
                                        handleChange(e)
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className='d-flex justify-content-end mt-4 me-3'>
                    <Button type='submit'>Save & Next</Button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default PropertyInfo