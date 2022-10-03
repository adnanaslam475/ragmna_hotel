import React from 'react'
import './AdvanceResForm.scss'
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { Currency } from '../../../Types/Types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const AdvanceResForm = () => {
    const [stayFrom, setStayFrom] = React.useState<Date | null>(null);
    const [stayTo, setStayTo] = React.useState<Date | null>(null);
    const [bookFrom, setBookFrom] = React.useState<Date | null>(null);
    const [bookTo, setBookTo] = React.useState<Date | null>(null);

    const countries: Currency[] = [
        { value: "India", label: "India" },
        { value: "Pakistan", label: "Pakistan" },
        { value: "Canada", label: "Canada" },
        { value: "United State", label: "United State" },
        { value: "Australia", label: "Australia" },
        { value: "Germany", label: "Germany" },
    ];
    const states: Currency[] = [
        { value: "India", label: "India" },
        { value: "Pakistan", label: "Pakistan" },
        { value: "Canada", label: "Canada" },
        { value: "United State", label: "United State" },
        { value: "Australia", label: "Australia" },
        { value: "Germany", label: "Germany" },
    ];

    return (<React.Fragment>
        <Row>
            <Col lg={4}>
                <Row className='mb-3'>
                    <div className='guest-info'>
                        <i className='icon fe fe-user' />
                        <span className='txt-highlight'>Guest</span>
                        <span className='txt-normal'>Info</span>
                    </div>
                </Row>
                <span className="d-flex ms-auto res-input">
                    <input
                        className="form-control mb-3"
                        placeholder="Guest Name"
                    />
                </span>
                <Row>
                    <Col>
                        <span className="d-flex ms-auto res-input">
                            <input
                                className="form-control mb-3"
                                placeholder="Email"
                            />
                        </span>
                    </Col>
                    <Col>
                        <span className="d-flex ms-auto res-input">
                            <input
                                className="form-control mb-3"
                                placeholder="Phone"
                            />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={countries} placeholder='Country' />

                    </Col>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={states} placeholder='State' />

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="d-flex ms-auto res-input">
                            <input
                                className="form-control mb-3"
                                placeholder="Account Name"
                            />
                        </span>
                    </Col>
                    <Col>
                        <span className="d-flex ms-auto res-input">
                            <input
                                className="form-control mb-3"
                                placeholder="Account Number"
                            />
                        </span>
                    </Col>
                </Row>
                <Select classNamePrefix="Select" options={countries} placeholder='Client Type' />
            </Col>
            <Col lg={4}>
                <Row className='mb-3'>
                    <div className='guest-info'>
                        <i className='icon fe fe-calendar' />
                        <span className='txt-highlight'>Reservation</span>
                        <span className='txt-normal'>Info</span>
                    </div>
                </Row>
                <span className="d-flex ms-auto res-input">
                    <input
                        className="form-control mb-3"
                        placeholder="Reservation Number"
                    />
                </span>
                <Select classNamePrefix="Select" className='mb-3' options={states} placeholder='Status' />
                <Row className='mb-3'>
                    <Col>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Stay From"
                                value={stayFrom}
                                onChange={(newValue) => {
                                    setStayFrom(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Col>
                    <Col>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="To"
                                value={stayTo}
                                onChange={(newValue) => {
                                    setStayTo(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Book from"
                                value={bookFrom}
                                onChange={(newValue) => {
                                    setBookFrom(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Col>
                    <Col>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="To"
                                value={bookTo}
                                onChange={(newValue) => {
                                    setBookTo(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={countries} placeholder='Rate Plan' />

                    </Col>
                    <Col className="mb-3">
                        <span className="d-flex ms-auto res-input">
                            <input
                                className="form-control mb-3"
                                placeholder="Promo Code"
                            />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={countries} placeholder='Room Class' />

                    </Col>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={states} placeholder='Room Number' />

                    </Col>
                </Row>
                <span className="d-flex ms-auto res-input">
                    <input
                        className="form-control mb-3"
                        placeholder="Credit Card"
                    />
                </span>
                <Select classNamePrefix="Select" options={states} placeholder='Tax Exempt' />
            </Col>
            <Col lg={4}>
                <Row className='mb-3'>
                    <div className='guest-info'>
                        <i className='icon fa fa-bullhorn' />
                        <span className='txt-highlight'>Marketing</span>
                        <span className='txt-normal'>Info</span>
                    </div>
                </Row>
                <Row>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={countries} placeholder='Source' />

                    </Col>
                    <Col className="mb-3">
                        <Select classNamePrefix="Select" options={states} placeholder='Marketing Segment' />

                    </Col>
                </Row>
                <Select classNamePrefix="Select" options={states} placeholder='Referral' />
                <div>
                    <i className='icon fe fe-close'/>
                    <button className="btn btn-primary"> Search</button>
                </div>
            </Col>
        </Row>
    </React.Fragment>
    )
}

export default AdvanceResForm