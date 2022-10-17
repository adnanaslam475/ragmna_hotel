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

const CreateSeason = () => {
  const [isEditModal, setIsEditModel] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [seasonDetails, setSeasonDetails] = useState([
    {
      seasonName: "",
      fromDate: "",
      toDate: "",
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
                <Row key={index} className="mt-4">
                  <Col lg={3}>
                    <div className="control-group form-group season-input">
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
                  <Col lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="From"
                        value={fromDate}
                        key={"from" + index}
                        onChange={(e) => {
                          setFromDate(e);
                          handleChange(e, index);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Col>
                  <Col lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="To"
                        value={toDate}
                        onChange={(newValue) => {
                          setToDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
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
