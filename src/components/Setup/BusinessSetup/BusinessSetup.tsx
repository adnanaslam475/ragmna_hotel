import React from 'react'
import { Form, ListGroup, Col, Row, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import './BusinessSetup.scss'
const Currency  = [
    { value: "Rupee", label: "Rupee" },
    { value: "Dollar", label: "Dollar" },
    { value: "Ruble", label: "Ruble" },
    { value: "Yen", label: "Yen" },
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
                        <Select classNamePrefix="Select" options={Currency} placeholder='Currency ' />
                    </div>
                    <div className="control-group form-group">
                        <label className="form-label">Time Zone</label>
                        <Select classNamePrefix="Select" options={Currency } placeholder='country' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BusinessSetup