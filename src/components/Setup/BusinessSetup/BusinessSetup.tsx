import React, { useState } from 'react'
import { Form, ListGroup, Col, Row, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import { AnyObject } from 'yup/lib/object';
import { useUser } from '../../Authentication/firebaseAuth/firebaseAuthSlice';
import { Currency } from '../../Types/Types';
import './BusinessSetup.scss'
import {  useGetSupplierByIdQuery, useUpdateSupplierByIdMutation, } from './businessSetupApi';
import { BusinessInfo } from './types';

const Currencies: Currency[] = [
    { value: "Rupee", label: "Rupee" },
    { value: "Dollar", label: "Dollar" },
    { value: "Ruble", label: "Ruble" },
    { value: "Yen", label: "Yen" },
];
const TimeZones: Currency[] = [
    { value: "(GMT+00:00) Default", label: "(GMT+00:00) Default" },
    { value: "(GMT+05:00) Islamabad,Karachi", label: "(GMT+05:00) Islamabad,Karachi" },
    { value: "(GMT+05:30) Chennai, Kolkata, Mumbai,New Delhi", label: "(GMT+05:30) Chennai, Kolkata, Mumbai,New Delhi" },
    { value: "(GMT+09:00) Osaka,Sapporo, Tokyo", label: "(GMT+09:00) Osaka,Sapporo, Tokyo" },
    { value: "(GMT+10:30) Lord Howe Island", label: "(GMT+10:30) Lord Howe Island" },
];

const BusinessSetup = () => {
    const { user } = useUser()
    const [businessInfoParams, setBusinessInfoParams] = useState<BusinessInfo>({
        name: '',
        crNumber: '',
        vatNumber: '',
        businessContactPerson: '',
        businessContactNumber: 0,
        logo: '',
        currency: '',
        timeZone: '',
    });
    const { data, isError, isLoading } = useGetSupplierByIdQuery({ id: user.supplierId })

    React.useEffect(()=>{
        if (!isLoading && data?.data) {
            setBusinessInfoParams({
                name: data.data?.name,
                crNumber: data.data?.crNumber,
                vatNumber: data.data?.vatNumber,
                businessContactPerson: data.data?.contact?.name,
                businessContactNumber: data.data?.contact?.phone,
                logo: '',
                currency: '',
                timeZone: '',
            })
        }
    },[data])
    


    const { name, crNumber, vatNumber, businessContactPerson, businessContactNumber, logo, currency, timeZone } = businessInfoParams;

    const changeHandler = (e) => {
        setBusinessInfoParams({ ...businessInfoParams, [e.target.name]: e.target.value });
    };
    const [updateSupplierById, Result] = useUpdateSupplierByIdMutation();
    const OnSubmit = async (e) => {
        try {
            let payload: any = Object.assign({}, businessInfoParams);
            payload["contact"] = {
                "name" : payload["businessContactPerson"],
                "phone" : payload["businessContactNumber"]
            }
            payload['id'] = user.supplierId
          delete payload["businessContactPerson"]
          delete payload["businessContactNumber"]
          await updateSupplierById(payload);
        } catch (err: any) {
          console.log(err, "err");
        }
        e.preventDefault();
      };



    return (
        <div className='business-form'>
            <h2>Business Information</h2>
            <Row>
                <Col>
                    <div className="control-group form-group">
                        <label className="form-label">Business Name</label>
                        <input
                            type="text"
                            className="form-control required"
                            placeholder="Business Name"
                            name="name"
                            value={name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">CR Number</label>
                        <input
                            type="number"
                            className="form-control required"
                            placeholder="CR Number"
                            name="crNumber"
                            value={crNumber}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">VAT Number</label>
                        <input
                            type="number"
                            className="form-control required"
                            placeholder="VAT Number"
                            name="vatNumber"
                            value={vatNumber}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Business Contact Person</label>
                        <input
                            type="text"
                            className="form-control required"
                            placeholder="Business Contact Person"
                            name="businessContactPerson"
                            value={businessContactPerson}
                            onChange={changeHandler} />
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
                            value={businessContactNumber}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="control-group form-group mb-0">
                        <label className="form-label">Logo</label>
                        <Form.Control
                            type="file"
                            name="logo"
                            value={logo}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Currency </label>
                        <Select classNamePrefix="Select" options={Currencies} placeholder='Select Currency' name="currency"/>
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Time Zone</label>
                        <Select classNamePrefix="Select" options={TimeZones} placeholder='Select Time Zone' name="timeZone" />
                    </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-center'>
                <Button
                    className="btn btn-primary py-1 px-4 mb-1"
                    type="submit"
                    onClick={OnSubmit}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default BusinessSetup