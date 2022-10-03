import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { DataTabless } from "../../../Data/Pages/TablesData/TableData";
import "./GuestHistory.scss";
import { Currency } from "../../Types/Types";
import Select from "react-select";

const GuestHistory = () => {
  const AccountType: Currency[] = [
    { value: "Rupee", label: "Rupee" },
    { value: "Dollar", label: "Dollar" },
    { value: "Ruble", label: "Ruble" },
    { value: "Yen", label: "Yen" },
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
  const guestTableDataItems = [
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
                <Row>
                  <Col lg={6}>
                    <label className="form-label">Account Type </label>
                    <Select
                      classNamePrefix="Select"
                      options={AccountType}
                      placeholder="Select Currency"
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="form-label">Account Type </label>
                    <Select
                      classNamePrefix="Select"
                      options={AccountType}
                      placeholder="Select Currency"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <span className="d-flex ms-auto">
                      <label className="form-label">Account Type </label>
                      <input
                        className="form-control mb-4"
                        placeholder="Search..."
                      />
                      <label className="form-label">STATUS: </label>
                      <input
                        className="form-control mb-4"
                        placeholder="Search..."
                      />
                    </span>
                  </Col>
                  <Col lg={6}>
                    <span className="d-flex ms-auto">
                      <label className="form-label">STATUS: </label>
                      <input
                        className="form-control mb-4"
                        placeholder="Search..."
                      />
                    </span>
                  </Col>
                </Row>
                <DataTabless
                  resTableDataItems={guestTableDataItems}
                  columns={columns}
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
