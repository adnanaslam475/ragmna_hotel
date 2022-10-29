import React, { useEffect, useState } from "react";
import { Button, Col, Row, Card, Form } from "react-bootstrap";
import "./CreateSeason.scss";
import EditSeasonDetail from "./EditSeasonDetail/EditSeasonDetail";
import CalendarSetup from "./CalendarSetup/CalendarSetup";
import { CommanDropDownType } from "../../PropertySetup/AddProperty/types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useParams } from "react-router-dom";
import { getById, removeSeason, useRateData } from "../RateSetupSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Redux/Store";
import ConformationPopup from "../../../../Modals/ConformationPopup/ConformationPopup";
import {
  DangerLeft,
  Success,
} from "../../../../Redux/Services/toaster-service";

const CreateSeason = (props: any) => {
  const { setRatePlanDetails, ratePlanDetails } = props;
  console.log(ratePlanDetails, "ratePlanDetails");
  const dispatch = useDispatch<AppDispatch>();
  let { id, ind, isDerived } = useParams();
  const { rateData } = useRateData();
  const getByRateId = async () => {
    await dispatch(getById(id ? id : "")).unwrap;
  };
  useEffect(() => {
    if (id) {
      getByRateId();
    }
  }, [id]);

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

  const [selectColor] = useState<CommanDropDownType[]>(colorTypes);
  const [openSelectColor, setOpenSelectColor] = useState([false]);
  const [isEditModal, setIsEditModel] = useState(false);
  const [isOpenDeletePopUp, setIsOpenDeletePopUp] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>("");
  const [selectedRadio, setSelectedRadio] = useState<any>("");
  const [seasonDetails, setSeasonDetails] = useState<any>([
    {
      name: "",
      startDate: "",
      endDate: "",
      color: "#707070",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      roomTypes: [],

      channels: [],
      restrictions: {
        minimumNights: 0,
        maximumNights: 0,
        promoCode: "",
      },
    },
  ]);
  const [season, setSeason] = useState<any>({});
  const isModelClose = () => {
    setIsEditModel(false);
  };

  useEffect(() => {
    if (rateData && rateData.seasons) {
      let seasons: any = [];
      for (let index = 0; index < rateData.seasons.length; index++) {
        let payload: any = Object.assign({}, rateData.seasons[index]);
        payload.startDate = new Date(payload.startDate);
        payload.endDate = new Date(payload.endDate);
        seasons.push(payload);
      }
      setSeasonDetails(seasons);
      seasons.push({
        name: "",
        startDate: "",
        endDate: "",
        color: "#707070",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        roomTypes: [],
        depositPolicy: "",
        cancellationPolicy: "",
        checkInPolicy: "",
        noShowPolicy: "",
        channels: [],
        restrictions: {
          minimumNights: 0,
          maximumNights: 0,
          promoCode: "",
        },
      });
      setSeasonDetails(seasons);
    }
  }, [rateData]);
  useEffect(() => {
    if (rateData && ind) {
    }
  }, [rateData]);

  const AddSeason = () => {
    setSeasonDetails([
      ...seasonDetails,
      {
        name: "",
        startDate: "",
        endDate: "",
        color: "#707070",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        roomTypes: [],

        channels: [],
        restrictions: {
          minimumNights: 0,
          maximumNights: 0,
          promoCode: "string",
        },
      },
    ]);
    setOpenSelectColor([...openSelectColor, false]);
  };

  const onSubmitSeason = (index) => {
    if (
      seasonDetails[index].name &&
      seasonDetails[index].startDate &&
      seasonDetails[index].endDate
    ) {
      setIsEditModel(true);
      setSeason(seasonDetails[index]);
    }
  };

  const deleteSeason = (index, id) => {
    setIsOpenDeletePopUp(true);
    setDeleteId(id);
  };

  const smallmodalClose = async (value) => {
    if (value) {
      try {
        let payload = {
          id: rateData["_id"],
          sId: deleteId,
        };
        await dispatch(removeSeason(payload)).unwrap();
        getByRateId();
        setIsOpenDeletePopUp(false);
        setDeleteId("");
        Success("Season has been deleted");
      } catch (err: any) {
        setIsOpenDeletePopUp(false);
        DangerLeft("Something went Wrong");
      }
    } else {
      setIsOpenDeletePopUp(false);
    }
  };

  const handleChange = (key, value, index) => {
    let temp = Object.assign([], seasonDetails);
    temp[index][key] = value;
    setSeasonDetails(temp);
  };

  const onHandleDayChange = (e, key, index) => {
    let array = seasonDetails.slice();
    let array2 = seasonDetails[index].days.slice();
    if (e.target.checked) {
      array2.push(key);
      const newObj = { ...seasonDetails[index], days: array2 };
      array.splice(index, 1, newObj);
      setSeasonDetails(array);
    } else {
      let i = array2.indexOf(key);
      array2.splice(i, 1);
      const newObj = { ...seasonDetails[index], days: array2 };
      array.splice(index, 1, newObj);
      setSeasonDetails(array);
    }
  };

  const onRadioChange = (e) => {
    if (e.target.name === "alwaysAvailable") {
      let newObj = { ...ratePlanDetails, period: [] };
      setRatePlanDetails(newObj);
    }
    setSelectedRadio(e.target.name);
  };

  useEffect(() => {
    if (ratePlanDetails && ratePlanDetails?.period?.length > 0) {
      setSelectedRadio("customDateRange");
    } else {
      setSelectedRadio("alwaysAvailable");
    }
  }, [ratePlanDetails, setSelectedRadio]);
  return (
    <React.Fragment>
      <div className="tab-content-container">
        {isDerived ? (
          <Row>
            <Col className="lg-6">
              <label className="custom-control custom-radio-md">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="alwaysAvailable"
                  onChange={(e) => {
                    onRadioChange(e);
                  }}
                  checked={selectedRadio === "alwaysAvailable"}
                />
                <span className="custom-control-label">
                  <b>Always available</b>
                </span>
                <p>
                  Rates will exist for this rate plan for every day that the
                  parent rate plan has rates
                </p>
              </label>
              <label className="custom-control custom-radio-md">
                <input
                  type="radio"
                  className="custom-control-input"
                  checked={selectedRadio === "customDateRange"}
                  onChange={(e) => {
                    onRadioChange(e);
                  }}
                  name="customDateRange"
                />
                <span className="custom-control-label">
                  <b>Custom date range</b>
                </span>
                <p>
                  Enter date ranges for when the derived rate plan will be
                  available
                </p>
              </label>
              {selectedRadio === "customDateRange" ? (
                <div>
                  {ratePlanDetails &&
                    ratePlanDetails?.period.map((item, index) => (
                      <Row
                        key={index}
                        className="mt-4 align-items-center"
                        style={{ marginLeft: "15px" }}
                      >
                        <Col lg={5} className="date-picker">
                          <DayPickerInput
                            dayPickerProps={{
                              disabledDays: { before: new Date() },
                            }}
                            placeholder="From"
                            value={
                              ratePlanDetails?.period[index]?.startDate
                                ? new Date(
                                    ratePlanDetails?.period[index]?.startDate
                                  )
                                : ""
                            }
                            onDayChange={(e) => {
                              let array = ratePlanDetails?.period.slice();
                              array[index]["startDate"] = e;
                              let newObj = {
                                ...ratePlanDetails,
                                period: array,
                              };
                              setRatePlanDetails(newObj);
                            }}
                          />
                        </Col>
                        <Col lg={5} className="date-picker">
                          <DayPickerInput
                            dayPickerProps={{
                              disabledDays: { before: new Date() },
                            }}
                            placeholder="To"
                            value={
                              ratePlanDetails?.period[index]?.endDate
                                ? new Date(
                                    ratePlanDetails?.period[index]?.endDate
                                  )
                                : ""
                            }
                            onDayChange={(e) => {
                              let array = ratePlanDetails?.period.slice();
                              array[index]["endDate"] = e;
                              let newObj = {
                                ...ratePlanDetails,
                                period: array,
                              };
                              setRatePlanDetails(newObj);
                            }}
                          />
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                          <i
                            className="icon fe fe-minus-circle fs-20"
                            onClick={() => {
                              let array = ratePlanDetails?.period.slice();
                              array.splice(index, 1);
                              let newObj = {
                                ...ratePlanDetails,
                                period: array,
                              };
                              setRatePlanDetails(newObj);
                            }}
                          />
                        </Col>
                      </Row>
                    ))}
                  <Row>
                    <i
                      className="icon i-plus fe fe-plus-circle mt-2 fs-20"
                      onClick={() => {
                        let array = ratePlanDetails?.period.slice();
                        if (array?.length > 0) {
                          array.push({ startDate: null, endDate: null });
                        } else {
                          array = [{ startDate: null, endDate: null }];
                        }
                        let newObj = {
                          ...ratePlanDetails,
                          period: array,
                        };
                        setRatePlanDetails(newObj);
                      }}
                    />
                  </Row>
                </div>
              ) : null}
            </Col>
            <Col className="lg-6">
              <CalendarSetup
                dateRange={
                  selectedRadio === "alwaysAvailable"
                    ? rateData?.seasons
                    : ratePlanDetails?.period
                }
              />
            </Col>
          </Row>
        ) : (
          <Row>
            <Card className="card-bg">
              <Card.Body>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <h4 className="m-0">{rateData.name}</h4>
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
                  <Row
                    key={index}
                    className="mt-4 align-items-center justify-content-around"
                  >
                    <Col lg={2} className="input-col">
                      <div className="control-group form-group season-input m-0">
                        <input
                          type="text"
                          className="form-control required"
                          placeholder="Enter Season Name"
                          name={`[${index}].name`}
                          value={seasonDetails[index].name}
                          onChange={(e) =>
                            handleChange("name", e.target.value, index)
                          }
                        />
                      </div>
                    </Col>
                    <Col lg={2} className="input-col">
                      <div className="date-picker">
                        <DayPickerInput
                          dayPickerProps={{
                            disabledDays: { before: new Date() },
                          }}
                          placeholder="From"
                          value={seasonDetails[index].startDate}
                          onDayChange={(e) => {
                            let temp = Object.assign([], seasonDetails);
                            temp[index]["startDate"] = e;
                            setSeasonDetails(temp);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={2} className="input-col">
                      <div className="date-picker">
                        <DayPickerInput
                          dayPickerProps={{
                            disabledDays: { before: new Date() },
                          }}
                          placeholder="To"
                          value={seasonDetails[index].endDate}
                          onDayChange={(e) => {
                            let temp = Object.assign([], seasonDetails);
                            temp[index]["endDate"] = e;
                            setSeasonDetails(temp);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={1} className="input-col">
                      <div className="position-relative">
                        <div className="selection">
                          <div
                            className="selection-item"
                            style={{
                              backgroundColor: seasonDetails[index].color,
                            }}
                          ></div>
                          <span
                            onClick={() => {
                              setOpenSelectColor({
                                ...openSelectColor,
                                [index]: !openSelectColor[index],
                              });
                            }}
                          >
                            <i className="icon fa fa-chevron-down"></i>
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
                                    let temp = Object.assign([], seasonDetails);
                                    temp.splice(index, 1, {
                                      ...seasonDetails[index],
                                      color: `${coloritem.value}`,
                                    });
                                    setSeasonDetails(temp);
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

                    <Col lg={2} className="input-col">
                      <div className="day-list">
                        <Form.Check
                          label="M"
                          type="checkbox"
                          checked={seasonDetails[index].days.includes("Monday")}
                          value={seasonDetails[index].days.includes("Monday")}
                          onChange={(e) => {
                            onHandleDayChange(e, "Monday", index);
                          }}
                        />
                        <Form.Check
                          label="T"
                          type="checkbox"
                          value={seasonDetails[index].days.includes("Tuesday")}
                          checked={seasonDetails[index].days.includes(
                            "Tuesday"
                          )}
                          onChange={(e) => {
                            onHandleDayChange(e, "Tuesday", index);
                          }}
                        />
                        <Form.Check
                          label="W"
                          type="checkbox"
                          value={seasonDetails[index].days.includes(
                            "Wednesday"
                          )}
                          checked={seasonDetails[index].days.includes(
                            "Wednesday"
                          )}
                          onChange={(e) => {
                            onHandleDayChange(e, "Wednesday", index);
                          }}
                        />
                        <Form.Check
                          label="T"
                          type="checkbox"
                          value={seasonDetails[index].days.includes("Thursday")}
                          checked={seasonDetails[index].days.includes(
                            "Thursday"
                          )}
                          onChange={(e) => {
                            onHandleDayChange(e, "Thursday", index);
                          }}
                        />
                        <Form.Check
                          label="F"
                          type="checkbox"
                          value={seasonDetails[index].days.includes("Friday")}
                          checked={seasonDetails[index].days.includes("Friday")}
                          onChange={(e) => {
                            onHandleDayChange(e, "Friday", index);
                          }}
                        />
                        <Form.Check
                          label="S"
                          type="checkbox"
                          value={seasonDetails[index].days.includes("Saturday")}
                          checked={seasonDetails[index].days.includes(
                            "Saturday"
                          )}
                          onChange={(e) => {
                            onHandleDayChange(e, "Saturday", index);
                          }}
                        />
                        <Form.Check
                          label="S"
                          type="checkbox"
                          value={seasonDetails[index].days.includes("Sunday")}
                          checked={seasonDetails[index].days.includes("Sunday")}
                          onChange={(e) => {
                            onHandleDayChange(e, "Sunday", index);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={1} className="input-col">
                      <div className="Save-delete-icon">
                        <button type="submit" className="save-btn">
                          <i
                            className="icon fe fe-check-circle"
                            title="Save"
                            onClick={() => {
                              onSubmitSeason(index);
                            }}
                          />
                        </button>
                        <button className="delete-btn">
                          <i
                            className="icon fe fe-x-circle"
                            title="Delete"
                            onClick={() => {
                              deleteSeason(index, item._id);
                            }}
                          />
                        </button>
                      </div>
                    </Col>
                  </Row>
                ))}

                <Row className="mt-6">
                  <CalendarSetup dateRange={seasonDetails} />
                </Row>
              </Card.Body>
            </Card>
          </Row>
        )}
      </div>
      {isEditModal && (
        <EditSeasonDetail season={season} isModelClose={isModelClose} />
      )}
      {isOpenDeletePopUp && (
        <ConformationPopup smallmodalClose={smallmodalClose} />
      )}
    </React.Fragment>
  );
};

export default CreateSeason;
