import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { DataTabless } from "../../../../Data/Pages/TablesData/TableData";
import { TableData } from "../../FrontOfficeTypes";
import "./UserHistory.scss";
const UserHistory = () => {
  const columns: any[] = [
    {
      cell: (row) => (
        <button className="btn btn-primary">{row.CATEGORY}</button>
      ),
      name: "CATEGORY",
      //   selector: (row) => [row.CATEGORY],
      ignoreRowClick: true,
      sortable: true,
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
      name: "TIME",
      selector: (row) => [formatAMPM(row.ARRIVE)],
      sortable: true,
    },
    {
      name: "USER",
      selector: (row) => [row.GUEST_NAME],
      sortable: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => [row.DESC],
      sortable: true,
    },
  ];
  const userHistories: TableData[] = [
    {
      PROPERTY: "Ocean Villas",
      GUEST_NAME: "Pamela Roberts",
      CATEGORY: "RESERVATION",
      DESC: "Checked in this reservation",
      id: 1,
      ARRIVE: new Date(),
    },
  ];
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  return (
    <div>
      <Row>
        <Col xl={12}>
          <div>
            <DataTabless
              resTableDataItems={userHistories}
              columns={columns}
              isSelectable={false}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default UserHistory;
