import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { TableData } from "../../../FrontOffice/FrontOfficeTypes"

import "./UserFolio.scss"
const UserFolio = () => {
    const userHistories: TableData[] = [
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
        {
            AMOUNT: "$276.65",
            TAX: "$6.65",
            TOTAL: "$276.65",
            QTY: "1",
            PROPERTY: "Ocean Villas",
            GUEST_NAME: "Pamela Roberts",
            CATEGORY: "Room Change",
            DESC: "Checked in this reservation",
            id: 1,
            ARRIVE: new Date(),
        },
    ];
    const columns: any[] = [
        {
            name: "STATUS",
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <Form.Check ></Form.Check>
                    <h6 className="m-0">Pending</h6>
                </div>

            ),
        },
        {
            name: "DATE",
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
            name: "CATEGORY",
            selector: (row) => [row.CATEGORY],
            sortable: true,
        },
        {
            name: "DESCRIPTION",
            selector: (row) => [row.DESC],
            sortable: true,
        },
        {
            name: "NOTES",
            cell: (row) => (
                <div className="dEloFe">
                    <Button className="fe fe-plus"></Button>
                </div>
            ),
            sortable: true,
        },
        {
            name: "Qty",
            selector: (row) => [row.QTY],
            sortable: true,
        },
        {
            name: "Amount",
            selector: (row) => [row.AMOUNT],
            sortable: true,
        },
        {
            name: "Tax",
            selector: (row) => [row.TAX],
            sortable: true,
        },
        {
            name: "Total",
            selector: (row) => [row.TOTAL],
            sortable: true,
        },
    ];

    return (
        <div>
            <Row>
                <Col xl={12}>
                    <Card className="card-bg">
                        <div>
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
    )
}
export default UserFolio;
