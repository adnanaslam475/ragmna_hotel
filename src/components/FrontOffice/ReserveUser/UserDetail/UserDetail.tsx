import React, { useState, useRef, forwardRef, FC } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { TableData } from "../../../FrontOffice/FrontOfficeTypes";
import "./UserDetail.scss";

const UserDetail = () => {
    const userHistories: TableData[] = [
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            QTY: "1",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
    ];
    const columns: any[] = [


        {
            name: "TASK TYPES",
            selector: (row) => [row.CATEGORY],
            sortable: true,
        },
        {
            name: "DETAILS",
            selector: (row) => [row.DESC],
            sortable: true,
        },
        {
            name: "DUE ON",
            selector: (row) => [
                row.ARRIVE.toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                }),
            ],
            sortable: true,
        },
        {
            name: "STATUS",
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <h6 className="m-0">To Do</h6>
                </div>

            ),
        },
        {
            cell: (row) => (
                <div className="dEloFe">
                    <Button className="fe fe-x"></Button>
                </div>
            ),
            sortable: true,
        },

    ];

    return (
        <div>
            <Row>
                <Col xl={8}>
                    <Card className="card-bg">
                        <div className="main-div-detail">
                            <div className="stay-info-div d-flex">
                                <h4><b>STAY</b>  INFO</h4>
                                <i className="fa fa-pencil" />
                            </div>
                            <div className="rate-plan-div">
                                <b>Ocean villas</b>
                                <span> RATE PLAN: <b>Rate Rate</b></span>
                                <i className="fa fa-unlock" />
                            </div>
                            <div className="time-div">
                                <i className="fa fa-lock" />
                                <div>
                                    <p>EXPECTED ARRIVAL TIME</p>
                                    <p>-</p>
                                </div>
                                <div>
                                    <p>EXPECTED DEPARTURE TIME</p>
                                    <p>-</p>
                                </div>
                            </div>
                            <div className="total-div">
                                <i className="bi-calendar2-date" />

                                <div>Sep 30,2022</div>
                                <div>Oct </div>
                                <div>2 Adult(s)</div>
                                <div>Standard Queen Room</div>
                                <div>
                                    <p>TOTAL</p>
                                    <h4>$ 2,214.00</h4>
                                </div>

                            </div>
                            <div className="btn-add-room">
                                <Button>ADD ROOM +</Button>
                            </div>
                        </div>

                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>ADD-ONS INCIDENTALS</b></h4>
                                <i className="fa fa-pencil" />
                            </div>
                            <div className="add-ons-sub">
                                <h2>There are no add-ons & incidentals set</h2>
                                <div className="d-flex justify-content-center p-4">
                                    <div className="p-2">
                                        <Button>ADD-ONS +</Button>
                                    </div>
                                    <div className="p-2">
                                        <Button >INCIDENTALS +</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>GUEST</b>  INFO</h4>
                            </div>
                            <div className="guest-info">
                                <div>
                                    <h4>Primary Guest</h4>
                                    <div className="p-4">
                                        <div className="guest-profile-div">
                                            <div className="d-flex align-item-center">
                                                <i className="fa fa-user"></i>
                                                <p className="p-2 d-flex align-items-center">Linda Johnson</p>
                                            </div>
                                            <div className="d-flex justify-content-betweens">
                                                <div>
                                                    <p>No Profile Linked</p>
                                                    <p>Create Profile</p>
                                                    <p>Link to Existing Profile</p>
                                                </div>
                                                <i className="fa fa-pencil edit-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Row className="p-4 d-flex">
                                    <Col lg={6} className="contact-info" >
                                        <h4><b>Contact Info</b></h4>
                                        <div className="mb-3">
                                            <p>CONTACT NAME</p>
                                            <p><b>Linda Johnson</b></p>
                                        </div>
                                        <div className="mb-3">
                                            <p>E-MAIL</p>
                                            <p><b>-</b></p>
                                        </div>
                                        <div className="mb-3">
                                            <p>PHONE</p>
                                            <p><b>-</b></p>
                                        </div>
                                        <div className="mb-3">
                                            <p>ALTERNATE PHONE</p>
                                            <p><b>-</b></p>
                                        </div>
                                        <div className="mb-3">
                                            <p>Account Info</p>
                                            <p><b>-</b></p>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="contact-info">
                                        <h4><b>Mailing Address</b></h4>
                                        <Row>
                                            <Col lg={6} >
                                                <div className="mb-3">
                                                    <p>ASSRESS</p>
                                                    <p><b>PO Box 215</b></p>
                                                </div>
                                                <div className="mb-3">
                                                    <p>CITY</p>
                                                    <p><b>Stock Bridge</b></p>
                                                </div>
                                                <div className="mb-3">
                                                    <p>STATE/PROVINCE</p>
                                                    <p><b>Masachusetts</b></p>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <p>COUNTRY</p>
                                                    <p><b>United States</b></p>
                                                </div>
                                                <div className="mb-3">
                                                    <p>POSTEL CODE</p>
                                                    <p><b>1262</b></p>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <div className="add-more-guests-btn">
                                    <Button>
                                        ADD MORE GUESTS +
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>VEHICLE  </b>INFO</h4>
                            </div>
                            <div className="vehicle-info">
                                <h5>There are no vehicle details</h5>
                                <div className="p-2 d-flex justify-content-center">
                                    <Button>ADD-VEHICLE +</Button>
                                </div>
                            </div>
                        </div>

                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>PAYMENT</b>METHOD</h4>
                                <i className="fa fa-pencil" />
                            </div>
                            <div className="vehicle-info">
                                <h5>There are no vehicle details</h5>
                                <div className="p-2 d-flex justify-content-center">
                                    <Button>ADD-VEHICLE +</Button>
                                </div>
                            </div>
                        </div>
                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>MARKETING  </b>INFO</h4>
                                <i className="fa fa-pencil" />
                            </div>
                            <div className="marketing-info">
                                <div className="p-2 d-flex justify-content-between">
                                    <div>
                                        <div className="mb-2">
                                            <p>TRAVEL AGENT</p>
                                            <p>-</p>
                                        </div>
                                        <div className="mb-2">
                                            <p>EXT RES#</p>
                                            <p>14</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-2">
                                            <p>MARKET</p>
                                            <p>-</p>
                                        </div>
                                        <div className="mb-2">
                                            <p>SOURCE </p>
                                            <p>innCenter</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <p>REFERRAL</p>
                                            <p>Other</p>
                                        </div>
                                        <div className="mb-2">
                                            <p>SUB SOURCE</p>
                                            <p>-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Row>
                                <Col xl={12}>
                                    <Card className="card-bg">
                                        <div>
                                            <div className="task"><h3><b>TASK</b></h3></div>
                                            <DataTable
                                                title
                                                columns={columns ? columns : []}
                                                data={userHistories}
                                            />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>VEHICLE  </b>INFO</h4>
                            </div>
                            <div className="vehicle-info">
                                <h5>There are no vehicle details</h5>
                                <div className="p-2 d-flex justify-content-center">
                                    <Button>ADD-VEHICLE +</Button>
                                </div>
                            </div>
                        </div>
                        <div className="main-div-detail mt-6">
                            <div className="stay-info-div d-flex">
                                <h4><b>POLICIES AND DESCLAIMERS</b></h4>
                            </div>
                            <div className="policies">

                                <div className="p-2 d-flex justify-content-left ">
                                    <i className="fe fe-chevrons-down"></i>
                                    <span>Deposit Policy</span>
                                </div>
                                <div className="p-2 d-flex justify-content-left">
                                    <i className="fe fe-chevrons-down"></i>
                                    <span>Check-in Policy</span>
                                </div>
                                <div className="p-2 d-flex justify-content-left">
                                    <i className="fe fe-chevrons-down"></i>
                                    <span>No Show Policy</span>
                                </div>
                            </div>
                        </div>

                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card-bg">
                        <div className="main-div-detail">
                            <div className="stay-info-div">
                                <h4 className='mb-0'>TRIP SUMMARY</h4>
                            </div>
                            <div className="p-2">
                                <div className="d-flex justify-content-between">
                                    <p>Room Charges</p>
                                    <p><b>$ 2,214.00</b></p>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>incidentals</p>
                                    <p><b>$ 0.00</b></p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Fees</p>
                                    <p>$ 66.00<b></b></p>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <p>Taxes</p>
                                    <p><b>$ 364.00</b></p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between p-2 trip-total">
                                <h6><b>Trip Total</b></h6>
                                <h6><b>$ 2,644.58</b></h6>
                            </div>
                            <div className="d-flex justify-content-between p-2 trip-total">
                                <h6><b>Paid</b></h6>
                                <h6><b>$ 2,214.25</b></h6>
                            </div>
                            <div className="d-flex justify-content-between p-2 trip-total">
                                <h6><b>Balance</b></h6>
                                <h6><b>$ 431.33</b></h6>
                            </div>
                        </div>
                        <div>
                            <Button>TAKE PAYMENT</Button>
                        </div>
                        <div>
                            <Button>REFUND</Button>
                        </div>
                        <div>
                            <Button>SEND REGISTRATION FORM</Button>
                        </div>


                    </Card>
                </Col>
            </Row>
        </div >
    )
}
export default UserDetail;
