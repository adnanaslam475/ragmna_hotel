import React  from "react";
import { Button, Col, Row } from "react-bootstrap";
import { DataTabless } from "../../../../Data/Pages/TablesData/TableData";
import "./UserDocument.scss"
const UserDocument = () => {

    const UserDocuments = [
        {
            FILE_NAME: "Ocean Villas",
            FILE_TYPE: "Pamela Roberts",
            ORIGIN: "RESERVATION",
            DATE_ADDED: "Checked in this reservation",
            id: 1,
        },
    ];

    const columns: any[] = [
        {
            name: "FILE NAME",
            selector: (row) => [row.FILE_NAME],
            sortable: true,
        },
        {
            name: "FILE TYPE",
            selector: (row) => [row.FILE_TYPE],
            sortable: true,
        },
        {
            name: "ORIGIN",
            selector: (row) => [row.ORIGIN],
            sortable: true,
        },
        {
            name: "DATE ADDED",
            selector: (row) => [row.DATE_ADDED],
            sortable: true,
        }
    ];

    return (
        <div>
            <Row>
                <Col xl={12}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex">
                            <Button className="mx-md-2">UPLOAD</Button>
                            <Button>DELETE</Button>
                        </div>
                    </div>
                    <div>
                        <DataTabless
                            resTableDataItems={UserDocuments}
                            columns={columns}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default UserDocument;
