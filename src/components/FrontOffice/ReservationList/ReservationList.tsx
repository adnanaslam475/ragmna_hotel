import { Card, FormControl, InputGroup, Row, Col } from "react-bootstrap";
import React, { useState, useRef, forwardRef, FC } from "react";
import { DataTabless } from "../../../Data/Pages/TablesData/TableData";
import {
  ArrivalsDetails,
  DetailsTabProps,
  ReservationListProps,
  TableData,
} from "../FrontOfficeTypes";
import "./ReservationList.scss";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import AdvanceResForm from "./AdvanceResForm/AdvanceResForm";
import DatePicker from "react-datepicker";

const ReservationList = (props: ReservationListProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isAdvance, setIsAdvance] = useState<boolean>(false);
  const [showArrivalPopup, setShowArrivalPopup] = useState<boolean>(false);
  const [showDeparturePopup, setShowDeparturePopup] = useState<boolean>(false);

  const { addTab } = props;
  let ArrivalDetail : DetailsTabProps[]= [
    {
      id: 1,
      name: "All Arrivals",
      counts: 10,
      isActive: true,
    },
    {
      id: 2,
      name: "Pending Arrivals",
      counts: 12,
      isActive: false,
    },
    {
      id: 3,
      name: "Arrivals & Departure",
      counts: 15,
      isActive: false,
    },
  ];
  const [showArrivalDetails, setShowArrivalDetails] =
    useState<ArrivalsDetails[]>(ArrivalDetail);

  let DepartureDetail: DetailsTabProps[] = [
    {
      id: 1,
      name: "All Departure",
      counts: 20,
      isActive: true,
    },
    {
      id: 2,
      name: "Pending Departure",
      counts: 22,
      isActive: false,
    },
    {
      id: 3,
      name: "Arrivals & Departure",
      counts: 15,
      isActive: false,
    },
  ];
  const [showDepartureDetails, setShowDepartureDetails] =
    useState<ArrivalsDetails[]>(DepartureDetail);

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
  const clickHandler = (event, row) => {
    addTab?.(row);
  };
  const columns: any[] = [
    {
      name: "PROPERTY",
      selector: (row) => [row.PROPERTY],
      sortable: true,
    },
    {
      cell: (row) => (
        <a
          style={{ cursor: "pointer" }}
          onClick={(e) => clickHandler(e, row)}
          id={row.id}
        >
          {row.GUEST_NAME}
        </a>
      ),
      ignoreRowClick: true,
      name: "GUEST NAME",
      // selector: (row) => [row.GUEST_NAME],
      sortable: true,
    },
    {
      name: "ACCOUNT NAME",
      selector: (row) => [row.ACCOUNT_NAME],
      sortable: true,
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
      sortable: true,
    },
    {
      name: "ROOM",
      selector: (row) => [row.ROOM],
      sortable: true,
    },
    {
      name: "ARRIVE",
      selector: (row) => [row.ARRIVE],
      sortable: true,
    },
    {
      name: "DEPART",
      selector: (row) => [row.DEPART],
      sortable: true,
    },
    {
      name: "NIGHT",
      selector: (row) => [row.NIGHT],
      sortable: true,
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
      id: 1,
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
      id: 2,
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
      id: 3,
      CHILD: 0,
      STATUS: "Reserved",
      ROOM: "DLXq:301",
      ARRIVE: "Oct 01 2022",
      DEPART: "Oct 10 2022",
      NIGHT: 9,
      TASK: "123",
    },
  ];

  const onbtnclick = (id: number, index: number, name: string) => {
    switch (name) {
      case "showArrivalDetails":
        ArrivalDetail.forEach((val) => {
          val.id == id ? (val.isActive = true) : (val.isActive = false);
        });
        setShowArrivalDetails(ArrivalDetail);
        break;

      case "DepartureDetails":
        DepartureDetail.forEach((val) => {
          val.id == id ? (val.isActive = true) : (val.isActive = false);
        });
        setShowDepartureDetails(DepartureDetail);
        break;

      default:
        break;
    }
  };

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
                    <Col lg={4}>
                      <Row className="d-flex align-items-center">
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
                      </Row>
                      <Link
                        to=""
                        className="d-flex justify-content-end"
                        onClick={() => setIsAdvance(true)}
                      >
                        Advanced
                      </Link>
                    </Col>
                    <Col lg={8}>
                      <Row className="Filter-column">
                        <Col lg={2}>
                          <DatePicker
                            dateFormat="MMM dd yyyy"
                            selected={startDate}
                            customInput={<CustomInput inputref={inputRef} />}
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
                          {showArrivalDetails.map((value, index) => {
                            if (value.isActive) {
                              return (
                                <div
                                  key={index}
                                  className="counter-res arrival"
                                >
                                  <CountUp className="h1" end={value.counts} />
                                  <p>
                                    {value.name}
                                    <i
                                      className="icon fa fa-chevron-down icon-details"
                                      onClick={() => {
                                        setShowArrivalPopup(!showArrivalPopup);
                                        onbtnclick(
                                          value.id,
                                          index,
                                          "showArrivalDetails"
                                        );
                                      }}
                                    />
                                  </p>
                                </div>
                              );
                            }
                          })}
                          {showArrivalPopup ? (
                            <div className="arrival-popup">
                              {showArrivalDetails.map((value, index) => {
                                if (!value.isActive) {
                                  return (
                                    <div
                                      key={index}
                                      className="counter-res"
                                      onClick={() => {
                                        onbtnclick(
                                          value.id,
                                          index,
                                          "showArrivalDetails"
                                        );
                                        setShowArrivalPopup(!showArrivalPopup);
                                      }}
                                    >
                                      {/* <CountUp className="h1" end={value.counts} /> */}
                                      <h1 className="h1">{value.counts}</h1>
                                      <p>{value.name}</p>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          ) : null}
                        </Col>
                        <Col lg={2}>
                          {showDepartureDetails.map((value, index) => {
                            if (value.isActive) {
                              return (
                                <div
                                  key={index}
                                  className="counter-res arrival"
                                >
                                  <CountUp className="h1" end={value.counts} />
                                  <p>
                                    {value.name}{" "}
                                    <i
                                      className="icon fa fa-chevron-down icon-details"
                                      onClick={() => {
                                        setShowDeparturePopup(
                                          !showDeparturePopup
                                        );
                                        onbtnclick(
                                          value.id,
                                          index,
                                          "DepartureDetails"
                                        );
                                      }}
                                    />{" "}
                                  </p>
                                </div>
                              );
                            }
                          })}
                          {showDeparturePopup ? (
                            <div className="arrival-popup">
                              {showDepartureDetails.map((value, index) => {
                                if (!value.isActive) {
                                  return (
                                    <div
                                      className="counter-res"
                                      key={index}
                                      onClick={() => {
                                        onbtnclick(
                                          value.id,
                                          index,
                                          "DepartureDetails"
                                        );
                                        setShowDeparturePopup(
                                          !showDeparturePopup
                                        );
                                      }}
                                    >
                                      {/* <CountUp className="h1" end={value.counts} /> */}
                                      <h1 className="h1">{value.counts}</h1>
                                      <p>{value.name}</p>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          ) : null}
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
                ) : (
                  <AdvanceResForm setIsAdvance={setIsAdvance} />
                )}
                <DataTabless
                  resTableDataItems={resTableDataItems}
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

export default ReservationList;
