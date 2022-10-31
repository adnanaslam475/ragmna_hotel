import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { DropzoneArea } from "material-ui-dropzone";
import { CommanDropDownType } from "./../types";
import { Box } from "@mui/system";
import { useGetAmenitiesQuery } from "./../apiendpoints";
import { addRoomTypeData, getPropertyDataById } from "./../propertySpaceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Redux/Store";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Success } from "../../../../Redux/Services/toaster-service";
import "./AddRoomTypes.scss";
import { Option } from "react-multi-select-component";
import {
  getProperties,
  usePropertyList,
} from "../../PropertySetup/propertySetupSlice";

export const AddRoomType = () => {
  const { propertyList } = usePropertyList();

  const getAllProperties = async () => {
    try {
      await dispatch(getProperties()).unwrap();
    } catch (error: any) {
      console.log(error);
    }
  };

  let getProperty = propertyList?.map((item, index) => {
    return { value: item._id, label: item.name };
  });

  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/propertyspace`;
    navigate(path);
  };
  const { data } = useGetAmenitiesQuery();
  const dispatch = useDispatch<AppDispatch>();

  let { id } = useParams();

  const state = [{ value: "both", label: "Both" }];
  const [addSection, setAddSection] = useState<boolean>(false);
  const [addRental, setAddRental] = useState<boolean>(false);
  const [useDefault, setUseDeafult] = useState<boolean>(false);
  const [sectionDetails, setSectionDetails] = useState<any>([]);
  const [selectRentalDetails, setSelectRentalDetails] = useState<any>([]);

  const allowFors: CommanDropDownType[] = [
    { value: "", label: "Select Allowed For" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  const units: CommanDropDownType[] = [
    { value: "", label: "Select Units For" },
    { value: "SquareFeet", label: "SquareFeet" },
  ];
  const sectionsType: CommanDropDownType[] = [
    { value: "", label: "Select section For" },
    { value: "Kitchen", label: "Kitchen" },
    { value: "SwimmingPool", label: "SwimmingPool" },
    { value: "FootballField", label: "FootballField" },
    { value: "BasketballField", label: "BasketballField" },
    { value: "Bedroom", label: "Bedroom" },
    { value: "Ballroom", label: "Ballroom" },
  ];

  let onSubmit = async (values: any) => {
    try {
      let data = {
        propertyId: values.propertyId,
        name: values.roomname,
        dimensions: {
          area: values.roomarea,
          unit: values.roomunit,
        },
        maxCapacity: {
          adults: values.roomadults,
          children: values.roomchilderen,
        },
        virtualTourLink: values.roomlink,
        allowedFor: values.roomallowedfor,
        isNonSmoking: values.roomsmoking,
        section: [...sectionDetails],
        rentalUnits: [...selectRentalDetails],
      };
      // if (id) {
      // 	let response: any = await dispatch(updatePropertyData(data)).unwrap()
      // 	console.log(response)
      // } else {
      // 	let response: any = await dispatch(addRoomTypeData(data)).unwrap()
      // 	console.log(response)
      // }
      let response: any = await dispatch(addRoomTypeData(data)).unwrap();
      Success("Room Type add successfully");
      RouteChange();
      // if (response !== '') {
      // 	Success('Room Type add successfully')
      // } else {
      // 	alert('error')
      // }
    } catch (error: any) {}
  };
  const initialValues = {
    propertyId: "",
    roomname: "",
    roomarea: 0,
    roomunit: "",
    roomadults: 0,
    roomchilderen: 0,
    roomallowedfor: "",
    roomlink: "",
    roomsmoking: false,
    sectionType: "",
    sectionName: "",
    sectionQuantity: 0,
    sectionAllowfor: "",
    sectionAdults: 0,
    sectionChildren: 0,
    sectionLink: "",
    sectionAmenities: [],
    sectionArea: 0,
    sectionUnit: "",
    rentalUnitNo: 0,
    stationID: "",
    defaultSection: false,
    rentalSectionType: "",
    rentalSectionName: "",
    rentalSectionQuantity: 0,
    rentalSectionLink: "",
    rentalSectionAllowed: "",
    rentalSectionAmenities: [],
    rentalSectionArea: 0,
    rentalSectionUnit: "",
    rentalSectionadults: 0,
    rentalSectionChildren: 0,
    section: [],
    rentalUnits: [],
  };
  const { handleSubmit, values, handleChange, setValues, setFieldValue } =
    useFormik({
      initialValues,
      onSubmit,
    });
  const getById = async () => {
    if (id) {
      let response: any = await dispatch(getPropertyDataById(id)).unwrap();

      if (response?.data) {
        setValues({
          ...values,
          roomname: response?.data?.name ? response?.data?.name : "",
          roomarea: response?.data?.dimensions.area
            ? response?.data?.dimensions.area
            : "",
          roomunit: response?.data?.dimensions.unit
            ? response?.data?.dimensions.unit
            : "",
          roomadults: response?.data?.maxCapacity.adults
            ? response?.data?.maxCapacity.adults
            : "",
          roomchilderen: response?.data?.maxCapacity.children
            ? response?.data?.maxCapacity.children
            : "",
          section: response?.data?.sections,
          rentalUnits: response?.data?.rentalUnits,
        });
        // if (response?.data?.sections) setSectionArray(response.data.sections)
      }
    }
  };
  useEffect(() => {
    if (id) {
      getById();
    }
  }, [id]);

  useEffect(() => {
    getAllProperties();
  }, []);

  let options = data?.data.map((item, index) => {
    return { value: item._id, label: item.name };
  });

  const saveSectionDetails = () => {
    let details = {
      name: values.sectionName,
      type: values.sectionType,
      quantity: values.sectionQuantity,
      allowedFor: values.sectionAllowfor,
      maxCapacity: {
        adults: values.sectionAdults,
        children: values.sectionChildren,
      },
      virtualTourLink: values.sectionLink,
      amenities: values.sectionAmenities,
      dimensions: {
        area: values.sectionArea,
        unit: values.sectionUnit,
      },
    };
    setSectionDetails([...sectionDetails, details]);
    setValues({
      ...values,
      sectionName: "",
      sectionType: "",
      sectionQuantity: 0,
      sectionAllowfor: "",
      sectionAdults: 0,
      sectionChildren: 0,
      sectionLink: "",
      sectionAmenities: [],
      sectionArea: 0,
      sectionUnit: "",
    });
  };

  const saveSelectRentalDetails = () => {
    let rentalDetails = {
      rentalUnitNumber: values.rentalUnitNo,
      stationId: values.stationID,
      useDefaultSections: values.defaultSection,
      sections: [
        {
          type: values.rentalSectionType,
          name: values.rentalSectionName,
          quantity: values.rentalSectionQuantity,
          virtualTourLink: values.rentalSectionLink,
          allowedFor: values.rentalSectionAllowed,
          amenities: values.rentalSectionAmenities,
          dimensions: {
            area: values.rentalSectionArea,
            unit: values.rentalSectionUnit,
          },
          maxCapacity: {
            adults: values.rentalSectionadults,
            children: values.rentalSectionChildren,
          },
        },
      ],
    };
    setSelectRentalDetails([...selectRentalDetails, rentalDetails]);
    setValues({
      ...values,
      rentalUnitNo: 0,
      stationID: "",
      defaultSection: false,
      rentalSectionType: "",
      rentalSectionName: "",
      rentalSectionQuantity: 0,
      rentalSectionLink: "",
      rentalSectionAllowed: "",
      rentalSectionAmenities: [],
      rentalSectionArea: 0,
      rentalSectionUnit: "",
      rentalSectionadults: 0,
      rentalSectionChildren: 0,
    });
  };

  return (
    <Card>
      <Card.Body>
        {/* <Formik initialValues={{ name: '', email: '', phone: '', blog: '' }}> */}
        <Form noValidate validated={false} onSubmit={handleSubmit}>
          <Row className="Section-details p-4 align-items-center">
            <Card.Title style={{ fontWeight: "bold", fontSize: "24px" }}>
              Room Information
            </Card.Title>
            <Col xl={6} className="mb-3">
              <Form.Label>Property</Form.Label>
              <Select
                classNamePrefix="Select"
                placeholder="Property"
                options={getProperty}
                name="propertyId"
                value={getProperty.filter(
                  (option) => option.value === values.propertyId
                )}
                onChange={(v) =>
                  handleChange({
                    target: { name: "propertyId", value: v?.value || "" },
                  })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
            <Col xl={6} className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                name="roomname"
                value={values.roomname}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
            <Col xl={3} className="mb-3">
              <Form.Label>Dimesnions area</Form.Label>
              <Form.Control
                type="number"
                placeholder="Area"
                name="roomarea"
                required
                value={values.roomarea}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid area.
              </Form.Control.Feedback>
            </Col>
            <Col xl={3} className="mb-3">
              <Form.Label>Dimensions Unit</Form.Label>
              <Select
                classNamePrefix="Select"
                placeholder="Unite"
                options={units}
                name="roomunit"
                value={units.filter(
                  (option) => option.value === values.roomunit
                )}
                onChange={(v) =>
                  handleChange({
                    target: { name: "roomunit", value: v?.value || "" },
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid unit.
              </Form.Control.Feedback>
            </Col>
            <div className="form-row">
              <Col xl={6} className="mb-3">
                <Box>
                  <div className="form-row">
                    <Col xl={6}>
                      <Form.Label>Adults</Form.Label>
                      <Form.Control
                        type="number"
                        name="roomadults"
                        placeholder="Adults"
                        value={values.roomadults}
                        required
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid area.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={6}>
                      <Form.Label>Childeren</Form.Label>
                      <Form.Control
                        type="number"
                        name="roomchilderen"
                        placeholder="Childerens"
                        value={values.roomchilderen}
                        required
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid area.
                      </Form.Control.Feedback>
                    </Col>
                  </div>
                </Box>
              </Col>
              <Col xl={3} className="mb-3">
                <Form.Label>Allowed For</Form.Label>
                <Select
                  classNamePrefix="Select"
                  // options={state}
                  placeholder="State"
                  options={allowFors}
                  name="roomallowedfor"
                  value={allowFors.filter(
                    (option) => option.value === values.roomallowedfor
                  )}
                  onChange={(v) =>
                    handleChange({
                      target: { name: "roomallowedfor", value: v?.value || "" },
                    })
                  }

                  // value={allowFors.filter((option) => option.value === values.allowedFor)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Col>
              <Col xl={3} className="mb-3">
                <Form.Label>Virtual Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Virtual Tour Link"
                  name="roomlink"
                  value={values.roomlink}
                  required
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid link.
                </Form.Control.Feedback>
              </Col>
            </div>
            <Col lg={6} className="mt-5">
              <Form.Group>
                <Form.Check
                  className="ps-6 pro-switch-style d-flex align-items-center"
                  type="switch"
                  id="roomsmoking"
                  label="Is Non Smoking?"
                  checked={values.roomsmoking}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xl={12} className="mb-3 mt-4">
              <DropzoneArea
                onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                acceptedFiles={["image/*"]}
                // onChange={this.handleChange.bind(this)}
                showFileNames
                showAlerts={true}
                filesLimit={100}
                dropzoneText="Select atleast 5 images"
              />
            </Col>
          </Row>
          <Row className="Section-details p-4">
            <Card.Title style={{ fontWeight: "bold", fontSize: "24px" }}>
              Section
            </Card.Title>
            {values.section.length !== 0 ? (
              <Row>
                <div className="d-flex justify-content-end mt-5">
                  <Button onClick={() => setAddSection(!addSection)}>
                    {!addSection ? "Add Section" : "Close"}
                  </Button>
                </div>
              </Row>
            ) : null}
            {addSection || values.section.length === 0 ? (
              <Row>
                <Col xl={4} className="mb-3">
                  <Form.Label>Section Type</Form.Label>
                  <Select
                    classNamePrefix="Select"
                    options={sectionsType}
                    placeholder="Type"
                    name="sectionType"
                    value={sectionsType.filter(
                      (option) => option.value === values.sectionType
                    )}
                    onChange={(v) =>
                      handleChange({
                        target: {
                          name: "sectionType",
                          value: v?.value || "",
                        },
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Type.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={4} className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="sectionName"
                    onChange={handleChange}
                    placeholder="Name"
                    value={values.sectionName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={4} className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Quantity"
                    name="sectionQuantity"
                    onChange={handleChange}
                    value={values.sectionQuantity}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={4}>
                  <Form.Label>Adults</Form.Label>
                  <Form.Control
                    type="number"
                    name="sectionAdults"
                    placeholder="Adults"
                    required
                    value={values.sectionAdults}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid area.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={4}>
                  <Form.Label>Childrens</Form.Label>
                  <Form.Control
                    type="number"
                    name="sectionChildren"
                    placeholder="Childrens"
                    required
                    value={values.sectionChildren}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid area.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={4} className="mb-3">
                  <Form.Label>Virtual Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Virtual Tour Link"
                    required
                    name="sectionLink"
                    value={values.sectionLink}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid link.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Amenities</Form.Label>
                  <Select
                    isMulti
                    classNamePrefix="Select"
                    options={options}
                    placeholder="Amentities"
                    value={options?.filter(
                      (option, i) =>
                        option.value ===
                        values.sectionAmenities?.find((x) => x === option.value)
                    )}
                    onChange={(val) => {
                      let newArry = (val as Option[]).map(
                        (item: Option) => item.value
                      );
                      setFieldValue("sectionAmenities", newArry);
                    }}
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Amenities.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Allowed For</Form.Label>
                  <Select
                    classNamePrefix="Select"
                    options={allowFors}
                    placeholder="State"
                    value={allowFors.filter(
                      (option) => option.value === values.sectionAllowfor
                    )}
                    onChange={(v) =>
                      handleChange({
                        target: {
                          name: "sectionAllowfor",
                          value: v?.value || "",
                        },
                      })
                    }
                    name="sectionAllowfor"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={4} className="mb-3">
                  <Form.Label>Dimesnions area</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Area"
                    required
                    name="sectionArea"
                    value={values.sectionArea}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid area.
                  </Form.Control.Feedback>
                </Col>
                <Col xl={4} className="mb-3">
                  <Form.Label>Dimensions Unit</Form.Label>
                  <Select
                    classNamePrefix="Select"
                    options={units}
                    placeholder="Unit"
                    name="sectionUnit"
                    value={units.filter(
                      (option) => option.value === values.sectionUnit
                    )}
                    onChange={(v) =>
                      handleChange({
                        target: {
                          name: "sectionUnit",
                          value: v?.value || "",
                        },
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid unit.
                  </Form.Control.Feedback>
                </Col>
                {values.sectionType === "Bedroom" ? (
                  <React.Fragment>
                    <Col xl={4}>
                      <Form.Label>Room Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Room Number"
                        required
                        name="roomNumber"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xl={4}>
                      <Form.Label>Bed Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Bed Type"
                        required
                        name="bedType"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xl={4}>
                      <Form.Label>Bed Count</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Bed Count"
                        required
                        name="bedCount"
                        onChange={handleChange}
                      />
                    </Col>
                  </React.Fragment>
                ) : null}

                <Col xl={12} className="mb-3 mt-4">
                  <DropzoneArea
                    acceptedFiles={["image/*"]}
                    // onChange={this.handleChange.bind(this)}
                    showFileNames
                    showAlerts={true}
                    filesLimit={100}
                    dropzoneText="Select images"
                  />
                </Col>
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => {
                      saveSectionDetails();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Row>
            ) : null}

            {sectionDetails.length !== 0 ? (
              <Row className="section-table mt-4 mb-6">
                <table
                  id="delete-datatable"
                  className="table table-bordered text-nowrap border-bottom"
                >
                  <thead>
                    <tr>
                      <th>Section Type</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Adults</th>
                      <th>Childrens</th>
                      <th>Allowed For</th>
                      <th>Virtual Link</th>
                      <th>Dimesnions area</th>
                      <th>Dimesnions Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectionDetails.map((val: any, index) => (
                      <Fragment key={index}>
                        <tr>
                          <td>{val.type}</td>
                          <td>{val.name}</td>
                          <td>{val.quantity}</td>
                          <td>{val.maxCapacity.adults}</td>
                          <td>{val.maxCapacity.children}</td>
                          <td>{val.allowedFor}</td>
                          <td>{val.virtualTourLink}</td>
                          <td>{val.dimensions.area}</td>
                          <td>{val.dimensions.unit}</td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </Row>
            ) : null}
          </Row>
          <Row className="Section-details p-4">
            <Card.Title style={{ fontWeight: "bold", fontSize: "24px" }}>
              Rental
            </Card.Title>
            {values.rentalUnits.length !== 0 ? (
              <Row>
                <div className="d-flex justify-content-end mt-5">
                  <Button onClick={() => setAddRental(!addRental)}>
                    {!addRental ? "Add Rental" : "Close"}
                  </Button>
                </div>
              </Row>
            ) : null}
            {addRental || values.rentalUnits.length === 0 ? (
              <Row>
                <Col xl={4} className="mb-3">
                  <Form.Label>Rental Unit No</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Name"
                    name="rentalUnit"
                    value={values.rentalUnits}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={4} className="mb-3">
                  <Form.Label>Station ID</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Station ID"
                    name="stationID"
                    onChange={handleChange}
                    value={values.stationID}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Group className="mb-3"></Form.Group>
                </Col>
                <Col lg={4} className="mt-7">
                  <Form.Group>
                    <Form.Check
                      className="ps-6 pro-switch-style d-flex align-items-center"
                      type="switch"
                      id="defaultSection"
                      label="Use Default Section"
                      onChange={(e) => {
                        handleChange(e);
                        setUseDeafult(!useDefault);
                      }}
                      checked={values.defaultSection}
                    />
                  </Form.Group>
                </Col>
                {!useDefault ? (
                  <React.Fragment>
                    <Col xl={12} className="mb-3>">
                      Sections
                    </Col>

                    <Col xl={4} className="mb-3">
                      <Form.Label>Section Type</Form.Label>
                      <Select
                        classNamePrefix="Select"
                        options={sectionsType}
                        placeholder="Type"
                        name="rentalSectionType"
                        value={sectionsType.filter(
                          (option) => option.value === values.rentalSectionType
                        )}
                        onChange={(v) =>
                          handleChange({
                            target: {
                              name: "rentalSectionType",
                              value: v?.value || "",
                            },
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Type.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={4} className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        name="rentalSectionName"
                        value={values.rentalSectionName}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                    <Col xl={4} className="mb-3">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Quantity"
                        name="rentalSectionQuantity"
                        value={values.rentalSectionQuantity}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>

                    <Col xl={3}>
                      <Form.Label>Adults</Form.Label>
                      <Form.Control
                        type="number"
                        name="rentalSectionAdults"
                        placeholder="Adults"
                        required
                        value={values.rentalSectionadults}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid area.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={3}>
                      <Form.Label>Childrens</Form.Label>
                      <Form.Control
                        type="number"
                        name="rentalSectionChildren"
                        placeholder="Childrens"
                        required
                        value={values.rentalSectionChildren}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid area.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={3} className="mb-3">
                      <Form.Label>Allowed For</Form.Label>
                      <Select
                        classNamePrefix="Select"
                        options={allowFors}
                        placeholder="State"
                        name="rentalSectionAllowed"
                        value={allowFors.filter(
                          (option) =>
                            option.value === values.rentalSectionAllowed
                        )}
                        onChange={(v) =>
                          handleChange({
                            target: {
                              name: "rentalSectionAllowed",
                              value: v?.value || "",
                            },
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={3} className="mb-3">
                      <Form.Label>Virtual Link</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Virtual Tour Link"
                        required
                        value={values.rentalSectionLink}
                        name="rentalSectionLink"
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid link.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={3} className="mb-3">
                      <Form.Label>Amenities</Form.Label>
                      <Select
                        isMulti
                        classNamePrefix="Select"
                        options={options}
                        placeholder="Amentities"
                        value={options?.filter(
                          (option, i) =>
                            option.value ===
                            values.rentalSectionAmenities?.find(
                              (x) => x === option.value
                            )
                        )}
                        onChange={(val) => {
                          let newArry = (val as Option[]).map(
                            (item: Option) => item.value
                          );
                          setFieldValue("rentalSectionAmenities", newArry);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Amenities.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={3} className="mb-3">
                      <Form.Label>Dimesnions area</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Area"
                        required
                        name="rentalSectionArea"
                        value={values.rentalSectionArea}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid area.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={6} className="mb-3">
                      <Form.Label>Dimensions Unit</Form.Label>
                      <Select
                        classNamePrefix="Select"
                        options={units}
                        placeholder="Unite"
                        name="rentalSectionUnit"
                        value={units.filter(
                          (option) => option.value === values.rentalSectionUnit
                        )}
                        onChange={(v) =>
                          handleChange({
                            target: {
                              name: "rentalSectionUnit",
                              value: v?.value || "",
                            },
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid unit.
                      </Form.Control.Feedback>
                    </Col>
                    <Col xl={12} className="mb-3 mt-4">
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        // onChange={this.handleChange.bind(this)}
                        showFileNames
                        showAlerts={true}
                        filesLimit={100}
                        dropzoneText="Select images"
                      />
                    </Col>
                  </React.Fragment>
                ) : null}
                <div className="d-flex justify-content-end">
                  <Button onClick={() => saveSelectRentalDetails()}>Add</Button>
                </div>
              </Row>
            ) : null}

            {selectRentalDetails.length !== 0 ? (
              <Row className="section-table mt-4 mb-6">
                <table
                  id="delete-datatable"
                  className="table table-bordered text-nowrap border-bottom"
                >
                  <thead>
                    <tr>
                      <th>Rental Unit No</th>
                      <th>Station ID</th>
                      <th>Default Section</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectRentalDetails.map((val: any, index) => (
                      <Fragment key={index}>
                        <tr>
                          <td>{val.rentalUnitNumber}</td>
                          <td>{val.stationId}</td>
                          <td>{val.useDefaultSections.toString()}</td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </Row>
            ) : null}
          </Row>
          <Button title="Submit" type="submit">
            Submit
          </Button>
        </Form>
        {/* </Formik> */}
      </Card.Body>
    </Card>
  );
};
