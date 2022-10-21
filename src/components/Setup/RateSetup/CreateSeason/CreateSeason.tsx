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
import { Formik, Form as FormikForm, Field, FieldArray } from "formik";

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

  const [openSelectColor, setOpenSelectColor] = useState([false]);
  const [isEditModal, setIsEditModel] = useState(false);
  const [from, setFromDate] = useState<Date | null>(null);
  const [to, setToDate] = useState<Date | null>(null);
  const [seasonDetails, setSeasonDetails] = useState([
    {
      name: "",
      from: "",
      to: "",
      color: "#707070",
      day: [
        {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
      ],
    },
  ]);

  const isModelClose = () => {
    setIsEditModel(false);
  };

  const AddSeason = () => {
    // seasonDetails.push(  {
    //     seasonName: "",
    //     from: "",
    //     to: "",
    //     color: "#707070",
    //     day: [
    //       {
    //         monday: true,
    //         tuesday: true,
    //         wednesday: true,
    //         thursday: true,
    //         friday: true,
    //         saturday: true,
    //         sunday: true,
    //       },
    //     ],
    //   })
    // setSeasonDetails(seasonDetails);
    setValues([
      ...values,
      {
        name: "",
        from: "",
        to: "",
        color: "#707070",
        day: [
          {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true,
          },
        ],
      },
    ]);
    setOpenSelectColor([...openSelectColor, false]);
  };

  const removeSeason = () => {};

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    from: Yup.string().required(),
    to: Yup.string().required(),
  });

  const onSubmit = (values) => {
    console.log(values, "val");
    setIsEditModel(true);
  };

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    touched,
    errors,
    setValues,
  } = useFormik({
    initialValues: seasonDetails,
    validationSchema,
    onSubmit,
  });

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
          <form onSubmit={handleSubmit}>
            {values.map((item, index) => (
              <Row key={index} className="mt-4 align-items-center">
                <Col lg={3}>
                  <div className="control-group form-group season-input m-0">
                    <input
                      type="text"
                      className="form-control required"
                      placeholder="Enter Season Name"
                      name={`[${index}].name`}
                      value={values[index].name}
                      onChange={handleChange}
                      // onChange={(e) => setFieldValue('seasonName',e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={2} className="date-picker">
                  <DayPickerInput
                    dayPickerProps={{ disabledDays: { before: new Date() } }}
                    placeholder="From"
                    value={values[index].from}
                    onDayChange={(e) => setFieldValue(`[${index}].from`, e)}
                  />
                </Col>
                <Col lg={2} className="date-picker">
                  <DayPickerInput
                    dayPickerProps={{ disabledDays: { before: new Date() } }}
                    placeholder="To"
                    value={values[index].to}
                    onDayChange={(e) => setFieldValue(`[${index}].to`, e)}
                  />
                </Col>
                <Col lg={1}>
                  <div className="position-relative">
                    <div className="selection">
                      <div
                        className="selection-item"
                        style={{ backgroundColor: values[index].color }}
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
                                setFieldValue(
                                  `[${index}].color`,
                                  coloritem.value
                                );
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
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].monday`,
                        e.target.checked
                      )
                    }
                  />
                  <Form.Check
                    label="T"
                    type="checkbox"
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].tuesday`,
                        e.target.checked
                      )
                    }
                  />
                  <Form.Check
                    label="W"
                    type="checkbox"
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].wednesday`,
                        e.target.checked
                      )
                    }
                  />
                  <Form.Check
                    label="T"
                    type="checkbox"
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].thursday`,
                        e.target.checked
                      )
                    }
                  />
                  <Form.Check
                    label="F"
                    type="checkbox"
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].friday`,
                        e.target.checked
                      )
                    }
                  />
                  <Form.Check
                    label="S"
                    type="checkbox"
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].saturday`,
                        e.target.checked
                      )
                    }
                  />
                  <Form.Check
                    label="S"
                    type="checkbox"
                    onChange={(e) =>
                      setFieldValue(
                        `[${index}].day[${index}].sunday`,
                        e.target.checked
                      )
                    }
                  />
                </Col>
                <Col lg={1}>
                  <div className="Save-delete-icon">
                    <button type="submit" className="save-btn">
                      <i className="icon fe fe-check-circle" title="Save" />
                    </button>
                    <button className="delete-btn">
                      <i
                        className="icon fe fe-x-circle"
                        title="Delete"
                        onClick={() => {
                          removeSeason();
                        }}
                      />
                    </button>
                  </div>
                </Col>
              </Row>
            ))}
          </form>

          <Row className="mt-6">
            <CalendarSetup
              dateRange={values}
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
