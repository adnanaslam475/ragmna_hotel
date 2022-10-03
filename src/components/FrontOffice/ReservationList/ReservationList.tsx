import { Card, FormControl, InputGroup, Row, Col } from "react-bootstrap";
import React, { useState, useRef, forwardRef } from "react";
import { DataTabless } from "../../../Data/Pages/TablesData/TableData";
import { TableData } from "../FrontOfficeTypes";
import "./ReservationList.scss";
import { DefaultDatePicker } from "../../../Data/Pages/Forms/FormAdvanceData/DataFormAdvanced";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import AdvanceResForm from "./AdvanceResForm/AdvanceResForm";
import DatePicker from "react-datepicker";

const ReservationList = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isAdvance, setIsAdvance] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const CustomInput = forwardRef((props: any, ref) => {
    const myArray = props.value.split(" ");

    return (
      <>
        <div {...props} ref={ref} className="date-box">
          <h4 className="datepicker-month">{myArray[0]}</h4>
          <div className="main-date">
            <h1>{myArray[1]}</h1>
            <i className="icon fa fa-chevron-down" />
          </div>
          <h4>{myArray[2]}</h4>
        </div>
      </>
    );
  });
  const inputRef = useRef(null);

  const columns: any[] = [
    {
      name: "PROPERTY",
      selector: (row) => [row.PROPERTY],
      sortable: false,
    },
    {
      name: "GUEST NAME",
      selector: (row) => [row.GUEST_NAME],
      sortable: true,
    },
    {
      name: "ACCOUNT NAME",
      selector: (row) => [row.ACCOUNT_NAME],
      sortable: false,
    },
    {
      name: "RES#",
      selector: (row) => [row.RES],
      sortable: true,
    },
    {
      name: "ADULTS",
      selector: (row) => [row.ADULTS],
      sortable: true,
    },
    {
      name: "CHILD",
      selector: (row) => [row.CHILD],
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => [row.STATUS],
      sortable: false,
    },
    {
      name: "ROOM",
      selector: (row) => [row.ROOM],
      sortable: false,
    },
    {
      name: "ARRIVE",
      selector: (row) => [row.ARRIVE],
      sortable: false,
    },
    {
      name: "DEPART",
      selector: (row) => [row.DEPART],
      sortable: false,
    },
    {
      name: "NIGHT",
      selector: (row) => [row.NIGHT],
      sortable: false,
    },
    {
      name: "TASK",
      selector: (row) => [row.TASK],
      sortable: false,
    },
  ];

  const resTableDataItems: TableData[] = [
    {
      PROPERTY: "Ocean Villas",
      GUEST_NAME: "Pamela Roberts",
      ACCOUNT_NAME: "-",
      RES: 22138416,
      ADULTS: 2,
      CHILD: 0,
      STATUS: "Reserved",
      ROOM: "STDt:217",
      ARRIVE: "Oct 23 2022",
      DEPART: "Oct 24 2022",
      NIGHT: 1,
      TASK: "123",
    },
    {
      PROPERTY: "Ocean Villas",
      GUEST_NAME: "Roberts Maguire",
      ACCOUNT_NAME: "-",
      RES: 22138398,
      ADULTS: 1,
      CHILD: 0,
      STATUS: "Reserved",
      ROOM: "DLXq:301",
      ARRIVE: "Oct 18 2022",
      DEPART: "Oct 19 2022",
      NIGHT: 1,
      TASK: "123",
    },
    {
      PROPERTY: "Ocean Villas",
      GUEST_NAME: "First Last",
      ACCOUNT_NAME: "New group",
      RES: 23214557,
      ADULTS: 2,
      CHILD: 0,
      STATUS: "Reserved",
      ROOM: "DLXq:301",
      ARRIVE: "Oct 01 2022",
      DEPART: "Oct 10 2022",
      NIGHT: 9,
      TASK: "123",
    },
  ];
  return (
    <div>
      <Row className="row-sm">
        <Col lg={12}>
          <Card className="res-card">
            <Card.Header>
              <Card.Title as="h3">Reservation List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive Reservation-table">
                {!isAdvance ? (
                  <Row className="align-items-center">
                    <Col lg={5}>
                      <div className="d-flex align-items-center">
                        <InputGroup className="mb-2">
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="Guest Name"
                          />
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="Res Number"
                          />
                          <InputGroup.Text className="btn btn-primary">
                            <i className="icon fe fe-search"></i>
                          </InputGroup.Text>
                        </InputGroup>
                        <Link
                          to=""
                          className="p-2"
                          onClick={() => setIsAdvance(true)}
                        >
                          Advanced
                        </Link>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <Row className="Filter-column">
                        <Col lg={2}>
                          <DatePicker
                            dateFormat="MMM dd yyyy"
                            selected={startDate}
                            customInput={<CustomInput inputRef={inputRef} />}
                            onChange={(date: Date) => setStartDate(date)}
                          />
                        </Col>
                        <Col lg={2}>
                          <div className="counter-res">
                            <CountUp className="h1" end={5} />
                            <p>In House</p>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="counter-res">
                            <CountUp className="h1" end={10} />
                            <p>All Arrivals <i className="icon fa fa-chevron-down icon-details" onClick={() => setShowPopup(!showPopup)} /> </p>
                          </div>
                          {/* {showPopup ? <div className="counter-res">
                            <CountUp className="h1" end={0} />
                            <p>Unassigned</p>
                          </div> : null} */}
                        </Col>
                        <Col lg={2}>
                          <div className="counter-res">
                            <CountUp className="h1" end={20} />
                            <p>All Departure <i className="icon fa fa-chevron-down icon-details" /> </p>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="counter-res">
                            <CountUp className="h1" end={0} />
                            <p>Unassigned</p>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="counter-res">
                            <CountUp className="h1" end={6} />
                            <p>New Reservation</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ) :
                  <AdvanceResForm setIsAdvance={setIsAdvance} />}
                <DataTabless
                  resTableDataItems={resTableDataItems}
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

export default ReservationList;
