import React, { useEffect, useState } from "react";
import { Button, Col, Row, Card, Form } from "react-bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./CreateSeason.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import EditSeasonDetail from "./EditSeasonDetail/EditSeasonDetail";
import CalendarSetup from "./CalendarSetup/CalendarSetup";
import { CommanDropDownType } from "../../PropertySetup/AddProperty/types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Formik, Form as FormikForm, Field, FieldArray } from "formik";
import { useParams } from "react-router-dom";
import { getById, useRateData } from "../RateSetupSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Redux/Store";
import { daysInWeek } from "date-fns";

const CreateSeason = () => {

  const dispatch = useDispatch<AppDispatch>();
  let { id } = useParams();
  const { rateData } = useRateData();
  const getByRateId = () => {
    let response = dispatch(getById(id ? id : "")).unwrap;
  };
  console.log(rateData, 'rateData');


  useEffect(() => {
    if (id) {
      getByRateId()
    }
  }, [id])


  let colorTypes: CommanDropDownType[] = [
    { value: "#f0642a", label: "#f6881c" },
    { value: "#f6881c", label: "#f6881c" },
    { value: "#cc5a71", label: "#cc5a71" },
    { value: "#d42649", label: "#d42649" },
    { value: "#563635", label: "#563635" },
    { value: "#85be73", label: "#85be73" },
    { value: "#26a69a", label: "#26a69a" },
    { value: "#104547", label: "#104547" },
    { value: "#3474bc", label: "#3474bc" },
    { value: "#1781ff", label: "#1781ff" },
    { value: "#7b7db7", label: "#7b7db7" },
    { value: "#5a4177", label: "#5a4177" },
    { value: "#fad84c", label: "#fad84c" },
    { value: "#deb7b7", label: "#deb7b7" },
    { value: "#8f2d56", label: "#8f2d56" },
  ];

  const [selectColor] =
    useState<CommanDropDownType[]>(colorTypes);

  const [openSelectColor, setOpenSelectColor] = useState([false]);
  const [isEditModal, setIsEditModel] = useState(false);
  const [seasonDetails, setSeasonDetails] = useState<any>([
    {
      name: "",
      startDate: "",
      endDate: "",
      color: "#707070",
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      roomTypes: [
      ],

      channels: [
      ],
      restrictions: {
        minimumNights: 0,
        maximumNights: 0,
        promoCode: "string"
      }
    },
  ]);
  const [season, setSeason] = useState<any>({});
  const isModelClose = () => {
    setIsEditModel(false);
  };

  const AddSeason = () => {
    setSeasonDetails([
      ...seasonDetails,
      {
        name: "",
        startDate: "",
        endDate: "",
        color: "#707070",
        days: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        roomTypes: [
        ],

        channels: [
        ],
        restrictions: {
          minimumNights: 0,
          maximumNights: 0,
          promoCode: "string"
        }
      },
    ]);
    setOpenSelectColor([...openSelectColor, false]);
  };

  const onSubmitSeason = (index) => {
    if (seasonDetails[index].name && seasonDetails[index].startDate && seasonDetails[index].endDate) {

      setIsEditModel(true)
      setSeason(seasonDetails[index])
    }
  }


  const removeSeason = (index) => {
    if (seasonDetails.length < 2) return
    let temp = Object.assign([], seasonDetails);
    temp.splice(index, 1)
    setSeasonDetails(temp);
  };

  const handleChange = (key, value, index) => {
    let temp = Object.assign([], seasonDetails);
    temp[index][key] = value;
    setSeasonDetails(temp);
  }

  const printRange = (range: any) => {
    const from = range.from.toLocaleDateString();
    const to = range.to.toLocaleDateString();
    return `${from} - ${to}`;
  };

  return (
    <React.Fragment>
      <Card className="mt-6">
        <Card.Body>
          <Row>
            <Col lg={6}>
              <h4>Rate Name</h4>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => {
                    AddSeason();
                  }}
                >
                  Add Season
                </Button>
              </div>
            </Col>
          </Row>
          {seasonDetails.map((item, index) => (
            <Row key={index} className="mt-4 align-items-center">
              <Col lg={3}>
                <div className="control-group form-group season-input m-0">
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Enter Season Name"
                    name={`[${index}].name`}
                    value={seasonDetails[index].name}
                    onChange={(e) => handleChange('name', e.target.value, index)}
                  />
                </div>
              </Col>
              <Col lg={2} className="date-picker">
                <DayPickerInput
                  dayPickerProps={{ disabledDays: { before: new Date() } }}
                  placeholder="From"
                  value={seasonDetails.startDate}
                  onDayChange={(e) => {
                    let temp = Object.assign([], seasonDetails)
                    temp[index]['startDate'] = e
                    setSeasonDetails(temp)
                  }
                  }
                />
              </Col>
              <Col lg={2} className="date-picker">
                <DayPickerInput
                  dayPickerProps={{ disabledDays: { before: new Date() } }}
                  placeholder="To"
                  value={seasonDetails[index].endDate}
                  onDayChange={(e) => {
                    let temp = Object.assign([], seasonDetails)
                    temp[index]['endDate'] = e
                    setSeasonDetails(temp)
                  }
                  }
                />
              </Col>
              <Col lg={1}>
                <div className="position-relative">
                  <div className="selection">
                    <div
                      className="selection-item"
                      style={{ backgroundColor: seasonDetails[index].color }}
                    ></div>
                    <span
                      onClick={() => {
                        setOpenSelectColor({
                          ...openSelectColor,
                          [index]: !openSelectColor[index],
                        });
                      }}
                    >
                      <i className="icon fa fa-chevron-down" />
                    </span>
                  </div>
                  {openSelectColor[index] ? (
                    <div className="color-seletor">
                      {selectColor.map((coloritem: any, colorindex) => {
                        return (
                          <div
                            key={colorindex}
                            className="color-item"
                            style={{
                              backgroundColor: coloritem.value,
                            }}
                            onClick={() => {
                              let temp = Object.assign([], seasonDetails)
                              temp.splice(index, 1, { ...seasonDetails[index], color: `${coloritem.value}` })
                              setSeasonDetails(temp)
                              setOpenSelectColor({
                                ...openSelectColor,
                                [index]: !openSelectColor[index],
                              });
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col lg={3} className="day-list">
                <Form.Check
                  label="M"
                  type="checkbox"
                  checked={seasonDetails[index].days.includes('Monday')}
                  value={seasonDetails[index].days.includes('Monday')}
                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('Monday')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.findIndex((val) => val == 'Monday')

                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
                <Form.Check
                  label="T"
                  type="checkbox"
                  value={seasonDetails[index].days.includes('Tuesday')}
                  checked={seasonDetails[index].days.includes('Tuesday')}

                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('Tuesday')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.indexOf('Tuesday')
                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
                <Form.Check
                  label="W"
                  type="checkbox"
                  value={seasonDetails[index].days.includes('Wednesday')}
                  checked={seasonDetails[index].days.includes('Wednesday')}
                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('WednesDay')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.indexOf('WednesDay')
                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
                <Form.Check
                  label="T"
                  type="checkbox"
                  value={seasonDetails[index].days.includes('Thursday')}
                  checked={seasonDetails[index].days.includes('Thursday')}
                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('Thursday')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.indexOf('Thursday')
                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
                <Form.Check
                  label="F"
                  type="checkbox"
                  value={seasonDetails[index].days.includes('Friday')}
                  checked={seasonDetails[index].days.includes('Friday')}
                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('Friday')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.indexOf('Friday')
                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
                <Form.Check
                  label="S"
                  type="checkbox"
                  value={seasonDetails[index].days.includes('Saturday')}
                  checked={seasonDetails[index].days.includes('Saturday')}
                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('Saturday')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.indexOf('Saturday')
                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
                <Form.Check
                  label="S"
                  type="checkbox"
                  value={seasonDetails[index].days.includes('Sunday')}
                  checked={seasonDetails[index].days.includes('Sunday')}
                  onChange={(e) => {
                    let temp = Object.assign([], seasonDetails[index].days)
                    let temp2 = Object.assign([], seasonDetails)
                    if (e.target.checked) {
                      temp.push('Sunday')
                      temp2[index] = { ...seasonDetails[index], days: temp }
                      // temp2.splice(index, 1, { ...seasonDetails[index], days: temp })
                      setSeasonDetails(temp2)
                    } else {
                      let i = temp.indexOf('Sunday')
                      if (i > -1) {
                        temp.splice(i, 1)
                        temp2[index] = { ...seasonDetails[index], days: temp }
                        setSeasonDetails(temp2)
                      }
                    }
                  }
                  }
                />
              </Col>
              <Col lg={1}>
                <div className="Save-delete-icon">
                  <button type="submit" className="save-btn">
                    <i className="icon fe fe-check-circle" title="Save" onClick={() => {
                      onSubmitSeason(index)
                    }} />
                  </button>
                  <button className="delete-btn">
                    <i
                      className="icon fe fe-x-circle"
                      title="Delete"
                      onClick={() => {
                        removeSeason(index);
                      }}
                    />
                  </button>
                </div>
              </Col>
            </Row>
          ))}

          <Row className="mt-6">
            <CalendarSetup
              dateRange={seasonDetails}
              onChange={(ranges) =>
                console.log(
                  "selected ranges:",
                  ranges.map((r) => printRange(r))
                )
              }
            />
          </Row>
        </Card.Body>
      </Card>
      {isEditModal && <EditSeasonDetail isModelClose={isModelClose} />}
    </React.Fragment>
  );
};

export default CreateSeason;