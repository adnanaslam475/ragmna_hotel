import React from 'react'
import { Form, ListGroup, Col, Row, InputGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import { Currency } from '../../Types/Types';
import './BusinessSetup.scss'

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
    return (
        <div className='business-form'>
            <h2>Business Information</h2>
            <Row>
                <Col>
                    <div className="control-group form-group">
                        <label className="form-label">Business Name</label>
                        <input type="text" className="form-control required" placeholder="Business Name" />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">CR Number</label>
                        <input type="number" className="form-control required" placeholder="CR Number" />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">VAT Number</label>
                        <input type="number" className="form-control required" placeholder="VAT Number" />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Business Contact Person</label>
                        <input type="text" className="form-control required" placeholder="Business Contact Person" />
                    </div>
                </Col>
                <Col>
                    <div className="control-group form-group">
                        <label className="form-label">Business Contact Number</label>
                        <input type="number" className="form-control required" placeholder="Business Contact Number" />
                    </div>
                    <div className="control-group form-group mb-0">
                        <label className="form-label">Logo</label>
                        <Form.Control type="file" />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Currency </label>
                        <Select classNamePrefix="Select" options={Currencies} placeholder='Select Currency' />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Time Zone</label>
                        <Select classNamePrefix="Select" options={TimeZones} placeholder='Select Time Zone' />
                    </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-center'>
              <Button className="btn btn-primary py-1 px-4 mb-1">Submit</Button>
            </div>
        </div>
    )
}

export default BusinessSetup