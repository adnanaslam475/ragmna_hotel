import React, { useState } from "react";
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

const CreateSeason = () => {
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

  const [selectColor, setSelectColor] =
    useState<CommanDropDownType[]>(colorTypes);

  const [openSelectColor, setOpenSelectColor] = useState(false);
  const [isEditModal, setIsEditModel] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [seasonDetails, setSeasonDetails] = useState([
    {
      seasonName: "",
      fromDate: "",
      toDate: "",
      color: "#707070",
      day: [
        {
          monday: true,
          tuesday: true,
          wednesday: true,
          thruesday: true,
          friday: true,
          saturday: true,
          sunday: true,
        },
      ],
    },
  ]);
  const handleChange = (e, index) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(seasonDetails[index]);
    seasonDetails[index] = {
      seasonName: e.target.value,
      fromDate: "",
      toDate: "",
      color: "",
      day: [
        {
          monday: true,
          tuesday: true,
          wednesday: true,
          thruesday: true,
          friday: true,
          saturday: true,
          sunday: true,
        },
      ],
    };
    // setBusinessInfoParams({
    //     ...businessInfoParams,
    //     [e.target.name]: e.target.value,
    //   });
  };

  const isModelClose = () => {
    setIsEditModel(false);
  };

  const AddSeason = () => {
    setSeasonDetails([
      ...seasonDetails,
      {
        seasonName: "",
        fromDate: "",
        toDate: "",
        color: "#707070",
        day: [
          {
            monday: true,
            tuesday: true,
            wednesday: true,
            thruesday: true,
            friday: true,
            saturday: true,
            sunday: true,
          },
        ],
      },
    ]);
  };

  //   const validationSchema = Yup.object({
  //     seasonName: Yup.string().required(),
  //     fromDate: Yup.string().required(),
  //     toDate: Yup.string().required(),
  //   });

  const onSubmit = () => {
    setIsEditModel(true);
  };

  //   const { handleChange, handleSubmit, values, touched, errors, setValues } =
  //     useFormik({
  //       initialValues: addSeason,
  //       validationSchema,
  //       onSubmit,
  //     });

  const printRange = (range: any) => {
    const from = range.from.toLocaleDateString();
    const to = range.to.toLocaleDateString();
    return `${from} - ${to}`;
  };

  const onSelectColor = (item, index) => {
    seasonDetails[index].color = item.value;
    setSeasonDetails(seasonDetails);
    setOpenSelectColor(false);
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
          {seasonDetails.map((item, index) => {
            return (
              <React.Fragment>
                {/* <form onSubmit={handleSubmit}> */}
                <Row key={index} className="mt-4 align-items-center">
                  <Col lg={2}>
                    <div className="control-group form-group season-input m-0">
                      <input
                        type="text"
                        className="form-control required"
                        placeholder="Enter Season Name"
                        name={"seasonName" + index}
                        value={item.seasonName}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                  </Col>
                  <Col lg={3} className='date-picker'>
                    <DayPickerInput placeholder='From' onDayChange={(day) => console.log(day)} />
                  </Col>
                  <Col lg={3} className='date-picker'>
                    <DayPickerInput placeholder='To' onDayChange={(day) => console.log(day)} />
                  </Col>
                  <Col lg={1}>
                    <div className="position-relative">
                      <div className="selection">
                        <div
                          className="selection-item"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span
                          onClick={() => {
                            setOpenSelectColor(!openSelectColor);
                          }}
                        >
                          <i className="icon fa fa-chevron-down" />
                        </span>
                      </div>
                      {openSelectColor ? (
                        <div className="color-seletor">
                          {selectColor.map((coloritem: any, colorindex) => {
                            return (
                              <div
                                key={colorindex}
                                className="color-item"
                                style={{ backgroundColor: coloritem.value }}
                                onClick={() => {
                                  onSelectColor(coloritem, index);
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
                      name={"monday" + index}
                      defaultChecked
                    />
                    <Form.Check
                      label="T"
                      type="checkbox"
                      name={"tuesday" + index}
                      defaultChecked
                    />
                    <Form.Check
                      label="W"
                      type="checkbox"
                      name={"wednesday" + index}
                      defaultChecked
                    />
                    <Form.Check
                      label="T"
                      type="checkbox"
                      name={"thruesday" + index}
                      defaultChecked
                    />
                    <Form.Check
                      label="F"
                      type="checkbox"
                      name={"friday" + index}
                      defaultChecked
                    />
                    <Form.Check
                      label="S"
                      type="checkbox"
                      name={"saturday" + index}
                      defaultChecked
                    />
                    <Form.Check
                      label="S"
                      type="checkbox"
                      name={"sunday" + index}
                      defaultChecked
                    />
                  </Col>
                </Row>
                <Row>
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={() => {
                        onSubmit();
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </Row>
                {/* </form> */}
              </React.Fragment>
            );
          })}

          <Row></Row>

          <CalendarSetup
            onChange={(ranges) =>
              console.log(
                "selected ranges:",
                ranges.map((r) => printRange(r))
              )
            }
          />
        </Card.Body>
      </Card>
      {isEditModal && <EditSeasonDetail isModelClose={isModelClose} />}
    </React.Fragment>
  );
};

export default CreateSeason;
