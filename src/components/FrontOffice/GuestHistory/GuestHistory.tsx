import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { DataTabless } from "../../../Data/Pages/TablesData/TableData";
import "./GuestHistory.scss";
import { Currency } from "../../Types/Types";
import Select from "react-select";
import { GuestTableDataItemsProps } from "../FrontOfficeTypes";

const GuestHistory = () => {

  const AccountType: Currency[] = [
    { value: "Guest Profile", label: "Guest Profile" },
  ];
  const SelectStatus: Currency[] = [{ value: "Active", label: "Active" }];
  const NameFilter: string[] = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "All",
  ];
  const columns: any = [
    {
      name: "Account Number",
      selector: (row) => [row.ACCOUNT_NUMBER],
      sortable: false,
    },
    {
      name: "Account Name",
      selector: (row) => [row.ACCOUNT_NAME],
      sortable: true,
    },
    {
      name: "Account Since",
      selector: (row) => [row.ACCOUNT_SINCE],
      sortable: false,
    },
    {
      name: "Reservation",
      selector: (row) => [row.RESERVATION],
      sortable: true,
    },
    {
      name: "status",
      selector: (row) => [row.STATUS],
      sortable: true,
    },
  ];
  const guestTableDataItems:GuestTableDataItemsProps[] = [
    {
      ACCOUNT_NUMBER: 867,
      ACCOUNT_NAME: "Dany Stormborn",
      ACCOUNT_SINCE: "sep 16,2019",
      RESERVATION: 1,
      STATUS: "Active",
    },
    {
      ACCOUNT_NUMBER: 897,
      ACCOUNT_NAME: "Joe Smith",
      ACCOUNT_SINCE: "Dec 11,2019",
      RESERVATION: 2,
      STATUS: "Active",
    },
    {
      ACCOUNT_NUMBER: 1068,
      ACCOUNT_NAME: "Garry Streep",
      ACCOUNT_SINCE: "Jun 16,2021",
      RESERVATION: 1,
      STATUS: "Active",
    },
  ];
  return (
    <div>
      <Row className="row-sm">
        <Col lg={12}>
          <Card className="Guest-card">
            <Card.Header>
              <Card.Title as="h3">Guest History</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Row className="mb-2 top-select">
                  <Col lg={6}>
                    <label className="form-label">ACCOUNT TYPE</label>
                    <Select
                      classNamePrefix="Select custom-controls-stacked"
                      options={AccountType}
                      placeholder="Select Account Type"
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="form-label">STATUS</label>
                    <Select
                      classNamePrefix="Select custom-controls-stacked"
                      name="status"
                      options={SelectStatus}
                      placeholder="Select Status"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <label className="form-label">ACCOUNT NAME</label>
                    <span className="d-flex ms-auto">
                      <input
                        className="form-control mb-2"
                        name="account name"
                        placeholder="First Name"
                      />
                      <input
                        className="form-control mb-2"
                        name="account name"
                        placeholder="Last Name"
                      />
                      <span className="custom-controls-stacked Guest-check">
                        <Form.Check label="Combine" type="checkbox" />
                      </span>
                    </span>
                  </Col>
                  <Col lg={6}>
                    <label className="form-label">ACCOUNT #:</label>
                    <span className="d-flex ms-auto">
                      <input className="form-control mb-2" />
                    </span>
                    <div className="history-search">
                      <button className="btn btn-primary" type="button">
                        clear
                      </button>
                      <button className="btn btn-primary">Search</button>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3 alphabet-filter">
                  {NameFilter.map((filteredName, index) => (
                    <Col key={index} className="border">
                      {filteredName}
                    </Col>
                  ))}
                </Row>
                <DataTabless
                  resTableDataItems={guestTableDataItems}
                  columns={columns}
                  isSelectable={true}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GuestHistory;
